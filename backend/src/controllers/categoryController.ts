import { Category } from "@/models/categoryModel.ts";
import { Item } from "@/models/ItemModel.ts";
import { Request, Response } from "express-serve-static-core";


export const getCategory = async (req: Request<{ category: string }>, res: Response) => {
    const { category } = req.params;
    if (!category) {
        res.status(400).json({
            success: false,
            message: "Category is required"
        });
        return;
    }

    try {
        const categoryData = await Category.findOne({ name: category });

        if (!categoryData) {
            res.status(404).json({
                success: false,
                message: "Category not found"
            });
            return;
        }

        const items = await Item.find({ menuId: categoryData.menuId });


        res.status(200).json({
            success: true,
            message: "Category fetched successfully",
            data: items
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}