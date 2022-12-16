import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
    all: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findMany();
    }),
    get: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
        return ctx.prisma.user.findFirst({
            where: {
                id: input,
            },
        });
    }),
});
