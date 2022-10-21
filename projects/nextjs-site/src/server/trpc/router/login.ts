import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import crypto from "crypto"

export const loginRouter = router({
  hello: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(10) }).nullish())
    .mutation(({ input }) => {
      return {
        id: crypto.randomUUID(),
        user: input?.email
      };
    }),
});
