import { model, Schema } from "mongoose";
import { type ICategory } from "src/types/category.types.ts";


const categorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    menuId: {
        type: Number,
        required: true
    }
}, { timestamps: true });


export const Category = model("Category", categorySchema);