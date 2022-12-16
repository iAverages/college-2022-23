import { router } from "../trpc";
import { authRouter } from "./auth";
import { coursesRouter } from "./courses";
import { userRouter } from "./user";

export const appRouter = router({
    auth: authRouter,
    courses: coursesRouter,
    users: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
