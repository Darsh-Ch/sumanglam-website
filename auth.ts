import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getServerEnv } from "@/lib/env";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    Credentials({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const env = getServerEnv();
        if (!env.ADMIN_EMAIL || !env.ADMIN_PASSWORD) return null;

        const emailMatches =
          parsed.data.email.toLowerCase() === env.ADMIN_EMAIL.toLowerCase();
        const passwordMatches = parsed.data.password === env.ADMIN_PASSWORD;
        if (!emailMatches || !passwordMatches) return null;

        return {
          id: "sumanglam-admin",
          name: "Sumanglam Admin",
          email: env.ADMIN_EMAIL,
        };
      },
    }),
  ],
});
