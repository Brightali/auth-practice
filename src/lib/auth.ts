import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { fa } from "zod/v4/locales";
import { sendResetPasswordEmail } from "./email";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,

    sendResetPassword: async ({ user, url }) => {
      sendResetPasswordEmail({
        to: user.email,
        resetUrl: url,
      });
    },
    // onPasswordReset: async ({ user }) => {
    //   // your logic here
    //   toast.success(`Password reset successful`);
    //   redirect("/log-in");
    // },

    ///////////////////
    user: {
      additionalFields: {
        role: {
          type: "string",
          input: false,
        },
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
