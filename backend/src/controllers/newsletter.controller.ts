import { NewsletterSubscription } from "@/models/newsletter.model.ts";
import { Request, Response } from "express";


export const subscribeToNewsletter = async (req: Request<{}, {}, { name: string, email: string }>, res: Response) => {
    const { name, email } = req.body;

    try {

        const existingSubscription = await NewsletterSubscription.findOne({ email });

        if (existingSubscription) {
            res.status(400).json({
                success: false,
                message: "You are already subscribed to the newsletter."
            })
            return;
        }

        const subscription = await NewsletterSubscription.create({ name, email });

        res.status(201).json({
            success: true,
            message: "Successfully subscribed to the newsletter.",
            data: subscription
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Unknown error"
        })
    }
}