import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import useCartStore from "../stores/useCartStore";
import { trpc } from "@utils/trpc";

const Home: NextPage = () => {
    const router = useRouter();
    const { add, remove, items, clear } = useCartStore();
    const { data, isLoading } = trpc.auth.getAllItems.useQuery();

    return (
        <Layout>
            <div className="flex flex-col gap-4">
                <div className="flex bg-base-200 p-10 ">
                    <div>
                        <h1 className="text-5xl font-bold">What would you like?</h1>
                        <div className="flex gap-4">
                            <button className="btn-primary btn mt-5" onClick={() => clear()}>
                                Clear
                            </button>
                            <button className="btn-primary btn mt-5" onClick={() => router.push("/checkout")}>
                                Checkout
                            </button>
                        </div>
                    </div>
                    <div>Items {items.length}</div>
                </div>
                <div className="flex flex-wrap gap-2 bg-base-200 p-10">
                    {items.map((itemId) => {
                        const item = data?.find((item) => item.id === itemId);
                        if (!item) return <></>;
                        return (
                            <div key={item.id} className="card w-56 max-w-[600px] flex-grow bg-base-100 shadow-xl">
                                <div className="card-body w-full">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.desc}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn-primary btn" onClick={() => remove(item.id)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Home;
