import { trpc } from "@utils/trpc";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Orders = () => {
    const { data: orders } = trpc.auth.getPreviousOrders.useQuery();
    const router = useRouter();

    return (
        <Layout>
            <h1 className="pb-5 text-5xl font-bold">Your Orders:</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Price (£)</th>
                            <th>Items</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order) => (
                            <tr key={order.id} className="hover hover:cursor-pointer" onClick={() => router.push(`/order/${order.id}`)}>
                                <th>{order.id}</th>
                                <th>{order.price}</th>
                                <th>{order.OrderItems.length}</th>
                                <th>{`${order.created_at}`}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Orders;
