import { z } from "zod";
import { courseFilterSchema } from "../../../schema/courseFilterSchema";
import ifTrue from "../../../utils/conditioanl";
import { router, protectedProcedure } from "../trpc";

export const coursesRouter = router({
    all: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.course.findMany();
    }),
    get: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
        return ctx.prisma.course.findFirst({
            where: {
                id: {
                    equals: input,
                },
            },
        });
    }),
    assignments: protectedProcedure
        .input(z.object({ courseId: z.string(), cursor: z.string().nullish() }))
        .query(async ({ ctx, input }) => {
            const limit = 50;
            const { cursor, courseId } = input;
            const items = await ctx.prisma.assignment.findMany({
                where: {
                    courseId: courseId,
                },
                orderBy: {
                    dueDate: "desc",
                },
                take: limit + 1,
            });
            const totalDBRows = await ctx.prisma.assignment.count({
                where: {
                    courseId: courseId,
                },
            });

            let nextCursor: typeof cursor | undefined = undefined;
            if (items.length > limit) {
                const nextItem = items.pop();
                nextCursor = nextItem?.id;
            }
            return {
                items,
                nextCursor,
                meta: {
                    totalDBRows,
                },
            };
        }),
    active: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.course.findMany({
            where: {
                published: { equals: true },
            },
        });
    }),
    enrolled: protectedProcedure.input(courseFilterSchema).query(({ ctx, input }) => {
        return ctx.prisma.course.findMany({
            take: input.amount,
            where: {
                enrolledUsers: {
                    some: {
                        user: {
                            id: {
                                equals: ctx.session.user.id,
                            },
                        },
                    },
                },
                ...ifTrue(
                    input.all,
                    {
                        published: {
                            equals: true,
                        },
                    },
                    {}
                ),
            },
        });
    }),
    enroll: protectedProcedure
        .input(
            z.object({
                userId: z.string().nullish(),
                courseId: z.string(),
            })
        )
        .mutation(({ ctx, input }) => {
            const userId = input.userId ?? ctx.session.user.id;
            return ctx.prisma.courseUser.create({
                data: {
                    courseId: input.courseId,
                    userId,
                },
            });
        }),
    unenroll: protectedProcedure
        .input(
            z.object({
                userId: z.string().nullish(),
                courseId: z.string(),
            })
        )
        .mutation(({ ctx, input }) => {
            const userId = input.userId ?? ctx.session.user.id;
            return ctx.prisma.courseUser.delete({
                where: {
                    courseId_userId: {
                        courseId: input.courseId,
                        userId,
                    },
                },
            });
        }),
});
