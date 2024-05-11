import { z } from "zod";

export const userValidationSchema = z.object({
  _id: z.string().optional(),
  email: z.string().email({ message: "Invalid email" }),
  username: z.string(),
  name: z.string(),
  password: z.string().min(8),
  img: z.string().optional(),
  isAdmin: z.boolean().optional(),
});

export const idValidationSchema = userValidationSchema
  .pick({
    _id: true,
  })
  .required();

export const emailValidationSchema = userValidationSchema
  .pick({
    email: true,
  })
  .required();

export const userSessionSchema = userValidationSchema.pick({
  name: true,
  email: true,
  _id: true,
  isAdmin: true,
});

export type UserSessionType = z.infer<typeof userSessionSchema>;
