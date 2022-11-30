import { type NextPage } from "next";
import Head from "next/head";
import * as z from "zod";
import useForm from "../hooks/useForm";
import { trpc } from "../utils/trpc";

const schema = z
    .object({
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(10),
        confirmPassword: z.string().min(10),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match",
            });
        }
    });

type SignUpForm = z.t;
const Home: NextPage = () => {
    const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<>(schema);

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">Sign up</h1>
                    <div className="flex">
                        <form className="flex flex-col gap-1" onSubmit={handleSubmit((d) => console.log(d))}>
                            <input {...register("")} />
                            {errors.name?.message && <p>{errors.name?.message}</p>}
                            <input {...register("age", { valueAsNumber: true })} />
                            {errors.age?.message && <p>{errors.age?.message}</p>}
                            <input type="submit" value="Submit" className="bg-purple-400 p-2" />
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
