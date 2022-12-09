import { router } from "../trpc";
import { authRouter } from "./auth";
import { coursesRouter } from "./courses";
import { exampleRouter } from "./example";

export const appRouter = router({
    example: exampleRouter,
    auth: authRouter,
    courses: coursesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
