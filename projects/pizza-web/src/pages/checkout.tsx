import type { NextPage } from "next";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import useCartStore from "../stores/useCartStore";
import { trpc } from "@utils/trpc";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from "clsx";

enum PaymentMethod {
    card = "Debit Card",
    paypal = "PayPal",
}

interface OrderForm {
    address: string;
    payment: PaymentMethod;
    cardDetails?: string;
}

const Home: NextPage = () => {
    const router = useRouter();
    const { remove, items } = useCartStore();
    const { data } = trpc.auth.getAllItems.useQuery();
    // const { data: paymentMethods } = trpc.auth.getActivePaymentMethods.useQuery();
    const { mutateAsync: createOrder } = trpc.auth.createOrder.useMutation();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<OrderForm>();
    const onSubmit: SubmitHandler<OrderForm> = async (submitData) => {
        const order = await createOrder({
            items,
            address: submitData.address,
            paymentMethod: submitData.payment,
        });
        router.push(`/complete/${order.id}`);
    };

    const paymentMethod = watch("payment");

    return (
        <Layout>
            <div className="flex flex-col gap-4">
                <div className="flex bg-base-200 p-10 ">
                    <div>
                        <h1 className="text-5xl font-bold">Here is Your Order!</h1>
                        <h2 className="text-xl">Fill out the details to complete the order.</h2>
                    </div>
                </div>
                <div className="flex bg-base-200 p-10">
                    {!items || items.length === 0 ? (
                        <div>
                            <p className="text-5xl font-bold">You have no Items in your cart!</p>
                            <button className="btn-primary btn" onClick={() => router.push("/new")}>
                                New Order
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="flex w-[70%] flex-row">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-2">
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Type here"
                                                className={clsx("input-bordered input w-full max-w-xs", { "input-error": errors.address })}
                                                {...register("address", { required: true })}
                                            />
                                            {errors.address && (
                                                <div className="alert alert-error max-w-xs shadow-lg">
                                                    <div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6 flex-shrink-0 stroke-current"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            />
                                                        </svg>
                                                        <span>Field is Required</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <select className="select-bordered select w-full max-w-xs" {...register("payment")}>
                                        <option>Debit Card</option>
                                        <option>PayPal</option>
                                    </select>
                                    {paymentMethod === PaymentMethod.card ? (
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Card Details</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Type here"
                                                className={clsx("input-bordered input w-full max-w-xs", {
                                                    "input-error": errors.cardDetails,
                                                })}
                                                {...register("cardDetails", { required: true })}
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="italic">Your paypal is 100% already linked to your account!</p>
                                        </div>
                                    )}
                                    <button type="submit" className="btn-primary btn max-w-xs">
                                        Place Order
                                    </button>
                                </form>
                            </div>
                            <div className="flex w-[30%] flex-col gap-2">
                                <h2 className="text-2xl font-bold">Items in Order:</h2>
                                {items.map((itemId, idx) => {
                                    const item = data?.find((item) => item.id === itemId);
                                    if (!item) return <></>;
                                    return (
                                        <div key={item.id + idx} className="card w-full flex-grow bg-base-100 shadow-xl">
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
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Home;
