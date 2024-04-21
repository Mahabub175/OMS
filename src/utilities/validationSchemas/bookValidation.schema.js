import { z } from "zod";

export const bookValidationSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  publication_date: z.object({
    $D: z.number(),
    $H: z.number(),
    $L: z.string(),
    $M: z.number(),
    $W: z.number(),
    $d: z.date(),
    $isDayjsObject: z.boolean(),
    $m: z.number(),
    $ms: z.number(),
    $s: z.number(),
    $u: z.undefined(),
    $x: z.object(),
    $y: z.number(),
  }),
  isbn: z
    .string({ required_error: "ISBN is required" })
    .max(13, { message: "ISBN must be 13 characters or less" }),
  image: z
    .object({
      file: z.object({
        lastModified: z.number(),
        lastModifiedDate: z.date(),
        name: z.string(),
        size: z.number(),
        type: z.string(),
        webkitRelativePath: z.string().optional(), // Make webkitRelativePath optional if it's not always present
      }),
    })
    .optional(), // Make the entire 'image' object optional if it's not always present
});
