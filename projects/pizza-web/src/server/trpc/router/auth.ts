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
});
