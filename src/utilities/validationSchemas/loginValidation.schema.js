import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string({ required_error: "Email or username is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 characters" }),
});
