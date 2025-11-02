import * as z from "zod";
import { ZodSchema } from "zod/v3";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: " First name must be at least 2 characters long" }),
  lastName: z
    .string()
    .min(2, { message: " Last name must be at least 2 characters long" }),
  userName: z
    .string()
    .min(6, { message: " User name must be at least 6 characters long" }),
});

export const validatedByZodSchema = <T>(
  schema: ZodSchema<T>,
  data: unknown
): T => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error?.issues.map((iss) => iss.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
};
