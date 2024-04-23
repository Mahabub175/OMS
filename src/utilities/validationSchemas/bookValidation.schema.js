import { z } from "zod";

export const bookValidationSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  publication_date: z.any({ required_error: "Publication date is required" }),
  isbn: z
    .string({ required_error: "ISBN is required" })
    .max(13, { message: "ISBN must be 13 characters or less" }),
  image: z.any({ required_error: "Image is required" }),
});

export const updateBookValidationSchema = z.object({
  title: z.string().optional(),
  publication_date: z.any().optional(),
  isbn: z
    .string()
    .max(13, { message: "ISBN must be 13 characters or less" })
    .optional(),
  status: z.boolean().optional(),
  image: z.any().optional(),
});
