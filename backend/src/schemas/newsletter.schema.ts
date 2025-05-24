import { z } from "zod";


export const newsletterSubscriptionSchema = z.object({
    name: z.string({ required_error: "Name is required" })
        .trim()
        .min(2, "Name is too short")
        .max(50, "Name is too long"),
    email: z.string({ required_error: "Email is required" })
        .email("Invalid email format")
        .trim()
        .toLowerCase()
})

export type NewsletterInput = z.infer<typeof newsletterSubscriptionSchema>;
