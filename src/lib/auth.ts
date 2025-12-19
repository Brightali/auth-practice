import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { sendResetPasswordEmail } from "./email";

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

    ////////do this for adding custom fields to user model////////
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
//infer and export the sesion and user type to add the field to the export
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
