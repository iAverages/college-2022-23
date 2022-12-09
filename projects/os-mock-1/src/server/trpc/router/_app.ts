import { router } from "../trpc";
import { authRouter } from "./auth";
import { coursesRouter } from "./courses";

export const appRouter = router({
    auth: authRouter,
    courses: coursesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
