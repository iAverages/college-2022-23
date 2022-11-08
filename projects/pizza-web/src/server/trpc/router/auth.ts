import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
    getSession: publicProcedure.query(({ ctx }) => {
        return ctx.session;
    }),
    getPreviousOrders: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.orders.findMany({
            where: {
                customer: ctx.session.user,
            },
            include: {
                OrderItems: true,
            },
        });
    }),
    getAllItems: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.items.findMany({});
    }),
    getOrder: protectedProcedure.input(z.object({ orderId: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.orders.findFirst({
            where: { id: input.orderId },
            include: { OrderItems: { include: { item_id: true, order_id: true } }, customer: true },
        });
    }),
    // getActivePaymentMethods: protectedProcedure.query(({ ctx }) => {
    //     return ctx.prisma.paymentMethods.findMany({ where: { enabled: true } });
    // }),
    createOrder: protectedProcedure
        .input(
            z.object({
                items: z.string().array(),
                address: z.string(),
                paymentMethod: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const items = await ctx.prisma.items.aggregate({
                _count: {
                    price: true,
                },
                where: {
                    id: { in: input.items },
                },
            });
            const { price } = items._count;
            console.log(price);
            return ctx.prisma.orders.create({
                data: {
                    billing_address: input.address,
                    price,
                    customer: {
                        connect: { id: ctx.session.user.id },
                    },
                    payment_method: input.paymentMethod,
                },
            });
        }),
});
