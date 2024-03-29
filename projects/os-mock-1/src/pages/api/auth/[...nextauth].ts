import NextAuth, { type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

/**
 * Configutation for NextAuth. An authentiation library build
 * for NextJS. While in development this has been setup for
 * Github oAuth login however during a prodution deployment
 * this can be changed to whatever the client requires.
 */
export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
    },

    // Include user.id on session
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
            }
            return session;
        },
    },
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),
    ],
};

export default NextAuth(authOptions);
