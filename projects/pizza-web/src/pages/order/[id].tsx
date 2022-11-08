import { useRouter } from "next/router";
import Layout from "@components/layout";
import { trpc } from "@utils/trpc";
import { useEffect, useState } from "react";
import Spinner from "@components/spinner";

const ViewOrder = () => {
    const router = useRouter();
    const { id } = router.query;
    const [orderId, setOrderId] = useState("");

    const { data: orderData, isLoading } = trpc.auth.getOrder.useQuery({ orderId });

    useEffect(() => {
        let toSet = "";
        if (typeof id !== "string" && typeof id != "undefined") toSet = id[0] ?? "";
        else toSet = id ?? "";
        setOrderId(toSet);
    }, [id]);

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <Layout>
            <div className="flex flex-col gap-4">
                <div className="bg-base-200 p-10">
                    <h1 className="text-5xl font-bold">Order {id}</h1>
                    <div className="flex gap-4">
                        <button className="btn-primary btn mt-5" onClick={() => router.push(`/order?reorder=${id}`)}>
                            Order Again?
                        </button>
                    </div>
                </div>
                <div className="flex bg-base-200 p-10">
                    <div>
                        <h2>Billing Details</h2>
                        <p>{orderData?.billing_address}</p>
                    </div>
                    <div></div>
                </div>
                <div className="flex bg-base-200 p-10">
                    {orderData?.OrderItems.map((item) => (
                        <div key={item.id}>
                            <div>{item.id}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ViewOrder;
