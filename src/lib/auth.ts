import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { fa } from "zod/v4/locales";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,

    /////////////////////

    sendResetPassword: async ({ user, url }) => {
      console.log(`reset password ${user.email} with link: ${url}`);
    },
  },

  ////////////////////////////

  // sendResetPassword: async ({user, url, token}, request) => {
  //     await sendEmail({
  //       to: user.email,
  //       subject: "Reset your password",
  //       text: `Click the link to reset your password: ${url}`,
  //     });
  //   },

  ///////////////////
  user: {
    additionalFields: {
      role: {
        type: "string",
        input: false,
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
