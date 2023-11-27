import { z } from "zod";

export const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: "Password must be String",
    })
    .max(10, { message: "password cannot be more than 10 characters" })
    .optional(),
});

export default userValidationSchema;
