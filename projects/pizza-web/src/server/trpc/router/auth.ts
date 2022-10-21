import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
    getSession: publicProcedure.query(({ ctx }) => {
        return ctx.session;
    }),
    getSecretMessage: protectedProcedure.query(() => {
        return "You are logged in and can see this secret message!";
    }),
    getPreviousOrders: protectedProcedure.query(({ ctx }) => {
        const { user } = ctx.session;
    }),
    getAllPizzas: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.pizzas.findMany({});
    }),
});
