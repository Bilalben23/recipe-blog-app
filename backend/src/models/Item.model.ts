import { Schema, model } from "mongoose";
import type { IComment, IIngredient, IItem, IMore } from "src/types/item.types.ts";


const InstructionSchema = new Schema({
    stepTitle: {
        type: String,
        required: true,
        trim: true
    },
    stepDescription: {
        type: String,
        required: true,
        trim: true
    }
}, { _id: false });


const IngredientSchema = new Schema<IIngredient>({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    }
}, { _id: false })

const CommentSchema = new Schema<IComment>({
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { _id: false });


const MoreSchema = new Schema<IMore>({
    prep_time: {
        type: String,
        required: true
    },
    cook_time: {
        type: String,
        required: true
    },
    servings: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true
    },
    source: {
        type: String,
        required: true
    }
}, { _id: false });


const DEFAULT_DESCRIPTION = "A delightful dish crafted with care, combining fresh ingredients and easy-to-follow steps for a satisfying meal experience.";

const ItemSchema = new Schema<IItem>({
    menuId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    thumbnail_image: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    description: {
        type: String,
        trim: true,
        default: DEFAULT_DESCRIPTION
    },
    instructions: {
        type: [InstructionSchema],
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    ingredients: {
        type: [IngredientSchema],
        required: true
    },
    comments: {
        type: [CommentSchema],
        default: []
    },
    more: {
        type: MoreSchema,
        required: true
    }

}, { timestamps: true });


export const Item = model("Item", ItemSchema);
