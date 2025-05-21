import { Schema, model } from "mongoose";


const IngredientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    }
})

const CommentSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})


const MoreSchema = new Schema({
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


const ItemSchema = new Schema({
    menuId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    thumbnail_image: {
        type: String,
        required: true
    },
    category: {
        type: String,
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
        type: [CommentSchema],
        required: true
    },
    more: {
        type: [MoreSchema],
        required: true
    }

}, { timestamps: true });


export const Item = model("Item", ItemSchema);
