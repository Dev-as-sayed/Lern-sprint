import { z } from "zod";

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: "Password must be String",
    })
    .max(20, { message: "Password can not be 20 cheracters" })
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
