import { z } from "zod";


export const contactMessageSchema = z.object({
    firstName: z.string({
        required_error: "First name is required",
        invalid_type_error: "First name must be a string"
    })
        .trim()
        .min(3, "First name must be at least 3 characters")
        .max(25, "First name must be less than 25 characters")
        .toLowerCase(),
    lastName: z.string({
        required_error: "Last name is required",
        invalid_type_error: "Last name must be a string"
    })
        .trim()
        .min(3, "Last name must be at least 3 characters")
        .max(25, "Last name must be less than 25 characters")
        .toLowerCase(),
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string"
    })
        .trim()
        .email("Invalid email format")
        .toLowerCase(),
    message: z.string({
        required_error: "Message is required",
        invalid_type_error: "Message must be a string"
    })
        .trim()
        .min(10, "Message must be at least 10 characters")
        .max(500, "Message must be less than 500 characters")
})

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
