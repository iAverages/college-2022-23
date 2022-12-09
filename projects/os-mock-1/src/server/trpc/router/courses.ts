import { z } from "zod";
import { courseFilterSchema } from "../../../schema/courseFilterSchema";
import ifTrue from "../../../utils/conditioanl";
import { router, protectedProcedure } from "../trpc";

export const coursesRouter = router({
    all: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.course.findMany();
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
