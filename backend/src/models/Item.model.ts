import type { IComment, IIngredient, IItem, IMore } from "@/types/item.types.ts";
import { Schema, model } from "mongoose";


const IngredientSchema = new Schema<IIngredient>({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    }
})

const CommentSchema = new Schema<IComment>({
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})


const MoreSchema = new Schema<IMore>({
    prep_time: {
        type: String,
        required: true
    },
    cook_time: {
        type: String,
        required: true
    },
    services: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
})


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
    instructions: {
        type: String,
        required: true
    },
    tags: [String],
    ingredients: {
        type: [IngredientSchema],
        required: true
    },
    comments: {
        type: [CommentSchema]
    },
    more: {
        type: MoreSchema,
        required: true
    }

}, { timestamps: true });


export const Item = model("Item", ItemSchema);
