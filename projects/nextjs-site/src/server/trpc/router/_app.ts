// src/server/router/_app.ts
import { router } from "../trpc";

import { loginRouter } from "./login";

export const appRouter = router({
  login: loginRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
