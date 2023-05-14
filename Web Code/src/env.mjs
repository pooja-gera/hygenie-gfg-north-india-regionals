import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    APIKEY: z.string().min(1),
    AUTHDOMAIN: z.string().min(1),
    STORAGEBUCKET: z.string().min(1),
    PROJECTID: z.string().min(1),
    MESSAGINGSENDERID: z.string().min(1),
    APPID: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    MEASUREMENT_ID: z.string().min(1),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
    NEXT_PUBLIC_MAP: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    PROJECTID: process.env.PROJECTID,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
    APPID: process.env.APPID,
    DATABASE_URL: process.env.DATABASE_URL,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    NEXT_PUBLIC_MAP: process.env.NEXT_PUBLIC_MAP,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
});
