import { model, Schema } from "mongoose";


export interface INewsletterSubscription extends Document {
    name?: string;
    email: string;
    subscribedAt: Date
}

const newsletterSchema = new Schema<INewsletterSubscription>({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })


export const NewsletterSubscription = model("NewsletterSubscription", newsletterSchema);
