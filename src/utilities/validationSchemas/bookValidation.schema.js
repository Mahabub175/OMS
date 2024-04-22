import { z } from "zod";

export const bookValidationSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  publication_date: z.any(),
  isbn: z
    .string({ required_error: "ISBN is required" })
    .max(13, { message: "ISBN must be 13 characters or less" }),
  image: z.any(),
});
