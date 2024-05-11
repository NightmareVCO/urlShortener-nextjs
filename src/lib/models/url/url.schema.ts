import { z } from "zod";

export const urlValidationSchema = z.object({
  _id: z.string().optional(),
  url: z.string().url(),
  shortUrl: z.string().url().optional(),
  clicks: z.number().default(0),
  status: z.boolean().default(true),
  user: z.string().optional(),
});
