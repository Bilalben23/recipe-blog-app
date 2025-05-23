import { Category } from "@/models/category.model.ts";
import { Item } from "@/models/Item.model.ts";
import { CreateCategoryInput, UpdateCategoryInput } from "@/schemas/category.schema.ts";
import { Request, Response } from "express-serve-static-core";
import { Schema } from "mongoose";



export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find().lean();

        res.status(200).json({
            success: true,
            message: "Categories fetched successfully.",
            data: categories
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


export const getCategoryById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    try {
        const category = await Category.findById(id).lean();

        if (!category) {
            res.status(404).json({
                success: false,
                message: "Category with this ID was not found!",
            })
            return;
        }

        res.status(200).json({
            success: true,
            message: "Category fetched successfully.",
            data: category
        })


    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}



export const createCategory = async (req: Request<{}, {}, CreateCategoryInput>, res: Response) => {
    const { name, menuId } = req.body;

    try {

        const doesCategoryExist = await Category.findOne({ name }).lean()

        if (doesCategoryExist) {
            res.status(400).json({
                success: false,
                message: "Category with this name already exists.",
            });
            return;
        }

        const createdCategory = await Category.create({ name, menuId });

        res.status(201).json({
            success: true,
            message: "Category created successfully!",
            data: createdCategory
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


export const updateCategory = async (req: Request<{ id: string }, {}, UpdateCategoryInput>, res: Response) => {
    const { id } = req.params;

    try {

        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCategory) {
            res.status(404).json({
                success: false,
                message: "Category with this ID was not found!",
            });
            return;
        }


        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: updatedCategory,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


export const deleteCatgeory = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    try {
        const deletedCategory = await Category.findByIdAndDelete(id).lean();

        if (!deletedCategory) {
            res.status(404).json({
                success: false,
                message: "Category with this ID was not found!",
            })
            return;
        }

        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            data: deletedCategory
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


