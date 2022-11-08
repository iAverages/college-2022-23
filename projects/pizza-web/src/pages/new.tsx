import Layout from "@components/layout";
import { trpc } from "@utils/trpc";
import { useRouter } from "next/router";
import Spinner from "@components/spinner";
import useCartStore from "../stores/useCartStore";
import { useEffect } from "react";

const New = () => {
    const { data, isLoading } = trpc.auth.getAllItems.useQuery();
    const { add, items, clear, remove } = useCartStore();
    const router = useRouter();

    useEffect(() => {
        // Reset cart on page load
        // clear();
    }, [clear]);

    return (
        <Layout>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between bg-base-200 p-10">
                    <div>
                        <h1 className="text-5xl font-bold">What would you like?</h1>
                        <div className="flex gap-4">
                            <button className="btn-primary btn mt-5" onClick={() => clear()} disabled={items.length === 0}>
                                Clear
                            </button>
                            <button className="btn-primary btn mt-5" onClick={() => router.push("/checkout")} disabled={items.length === 0}>
                                Checkout
                            </button>
                        </div>
                    </div>
                    <div className="mb-4 h-64 text-right">
                        <h2 className="mb-2 text-3xl">Items | {items.length}</h2>
                        <div className="scrollbar flex h-full w-full flex-col gap-1 overflow-y-auto overflow-x-hidden">
                            {items.map((itemId) => {
                                const itemDetails = data?.find((data) => data.id === itemId);
                                if (!itemDetails) return <></>;
                                return (
                                    <div key={itemId} className="flex justify-end gap-1">
                                        <p>
                                            {itemDetails.name} | £{itemDetails.price}
                                        </p>
                                        <button className="btn-primary btn-xs btn" onClick={() => remove(itemId)}>
                                            Remove
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 bg-base-200 p-10">
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        data?.map((item) => (
                            <div key={item.id} className="card w-56 max-w-[600px] flex-grow bg-base-100 shadow-xl">
                                <div className="card-body w-full">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.desc}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn-primary btn" onClick={() => add(item.id)}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default New;
