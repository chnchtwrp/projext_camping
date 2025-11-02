"use server";

import { profileSchema, validatedByZodSchema } from "@/utils/schemas";

const showErrors = (error: unknown): { message: string } => {
  // code body
  return {
    message:
      error instanceof Error ? error.message : "An unknown error occurred",
  };
};

export const createProfileAction = async (
  previousState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = validatedByZodSchema(profileSchema, rawData);
    console.log("Zod Validation Result is:", validatedData);
    return { message: "Profile Created Successfully!" };
  } catch (error) {
    console.log(error);
    return showErrors(error);
  }
};
