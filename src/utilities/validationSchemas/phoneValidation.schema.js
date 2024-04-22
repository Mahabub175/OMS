import { z } from "zod";

export const createPhoneValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  relation: z.string({ required_error: "Relation is required" }),
  number: z
    .number({ required_error: "Number is required" })
    .max(13, { message: "Number must be 13 characters or less" }),
  role: z.string({ required_error: "Role is required" }),
});

export const updatePhoneValidationSchema = z.object({
  name: z.string().optional(),
  relation: z.string().optional(),
  number: z
    .number()
    .max(13, { message: "Number must be 13 characters or less" })
    .optional(),
  role: z.string().optional(),
});
