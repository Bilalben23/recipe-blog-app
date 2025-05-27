import type { IContactMessage } from "@/types/contact.types.ts";
import { model, Schema } from "mongoose";

const ContactMessageSchema = new Schema<IContactMessage>({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
});

export const ContactMessage = model("ContactMessage", ContactMessageSchema);