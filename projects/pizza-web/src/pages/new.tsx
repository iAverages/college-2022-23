import Layout from "@components/layout";
import { trpc } from "@utils/trpc";
import { useRouter } from "next/router";
import Spinner from "@components/spinner";
import useCartStore from "../stores/useCartStore";

const New = () => {
    const { data, isLoading } = trpc.auth.getAllItems.useQuery();
    const { add, items, clear } = useCartStore();
    const router = useRouter();

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
