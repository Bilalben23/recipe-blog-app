import { model, Schema } from "mongoose";


const categorySchema = new Schema({
    name: String,
    menuId: Number
})


export const Category = model("Category", categorySchema);