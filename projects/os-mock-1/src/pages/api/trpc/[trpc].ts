import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "../../../env/server.mjs";
import { createContext } from "../../../server/trpc/context";
import { appRouter } from "../../../server/trpc/router/_app";

/**
 * Create handler for trpc. TRPC helps to
 * streamline frontend <-> backend communication
 * and allows for typesafety between both sides
 */
export default createNextApiHandler({
    router: appRouter,
    createContext,
    onError:
        env.NODE_ENV === "development"
            ? ({ path, error }) => {
                  console.error(`❌ tRPC failed on ${path}: ${error}`);
              }
            : undefined,
});
