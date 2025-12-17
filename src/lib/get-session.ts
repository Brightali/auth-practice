import { cache } from "react";
import { auth } from "./auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

export const getSessionData = cache(
  async () =>
    await auth.api.getSession({
      headers: await headers(),
    })
);
