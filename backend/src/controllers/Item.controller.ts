import { Category } from "@/models/category.model.ts";
import { Item } from "@/models/Item.model.ts";
import { CreateItemInput } from "@/schemas/item.schema.ts";
import type { Request, Response } from "express-serve-static-core";

export const getAllItems = async (
    req: Request<{}, {}, {}, { limit?: number; page?: number }>,
    res: Response
) => {
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    try {
        const items = await Item.find({})
            .populate("category", "name")
            .select("name thumbnail_image category more.difficulty more.prep_time")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean();

        const total = await Item.countDocuments();
        const totalPages = Math.ceil(total / limit);
        const nextPage = page < totalPages ? page + 1 : null;

        res.status(200).json({
            success: true,
            message: "Items fetched successfully",
            data: items,
            pagination: {
                total,
                page,
                limit,
                totalPages,
                nextPage
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Failed to fecth items"
        });
    }
}


export const getItemById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    try {
        const item = await Item.findById(id)
            .populate("category", "name")
            .lean();

        if (!item) {
            res.status(404).json({
                success: false,
                message: "Item not found"
            })
            return;
        }

        res.status(200).json({
            success: true,
            message: "Item fetched successfully",
            data: item
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Unknown error"
        })
    }
}


export const getSearchItems = async (req: Request<{}, {}, {}, { q?: string }>, res: Response) => {
    const { q } = req.query;

    if (!q) {
        res.status(400).json({
            success: false,
            message: "Search query is required"
        });
        return;
    }

    try {
        const items = await Item.find({ name: { $regex: q, $options: "i" } })
            .populate("category", "name")
            .select("name thumbnail_image category more.difficulty more.prep_time")
            .sort({ createdAt: -1 })
            .lean();

        res.status(200).json({
            success: true,
            message: items.length ? "Items fetched successfully" : "No items found!",
            data: items
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Unknown error"
        })
    }
}


export const getItemsByCategory = async (req: Request<{ category: string }>, res: Response) => {
    const { category } = req.params;

    try {

        const foundCategory = await Category.findOne({ name: category.toLowerCase() }).lean()

        if (!foundCategory) {
            res.status(404).json({
                success: false,
                message: "Category with this name doesn't exist!"
            })
            return;
        }

        const itemsByCategory = await Item.find({ category: foundCategory._id })
            .populate("category", "name")
            .select("name thumbnail_image category more.difficulty more.prep_time")
            .lean()


        res.status(200).json({
            success: true,
            message: `Items of category "${foundCategory.name}" fetched successfully`,
            data: itemsByCategory
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Unknown error"
        })
    }
}

export const createItem = async (req: Request<{}, {}, CreateItemInput>, res: Response) => {
    try {

        const foundItem = await Item.findOne({ name: req.body.name });

        if (foundItem) {
            res.status(400).json({
                success: false,
                message: "Item with this name already exists!",
            })
            return;
        }

        const createdItem = await Item.create(req.body);

        res.status(201).json({
            success: true,
            message: "Item created successfully.",
            data: createdItem
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Unknown error"
        })
    }
}


export const updateItem = async (req: Request<{ id: string }>, res: Response) => {
    try {

        // TODO: add update item logic 

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Unknown error"
        })
    }
}


export const deleteItem = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    try {

        const deletedItem = await Item.findByIdAndDelete(id).lean();

        if (!deletedItem) {
            res.status(404).json({
                success: false,
                message: "Item not found",
            })
            return;
        }

        res.status(200).json({
            success: true,
            message: "Item deleted successfully",
            data: deletedItem
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Unknown error"
        })
    }
}
