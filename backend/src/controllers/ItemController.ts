import { Item } from "@/models/ItemModel.ts";
import { Request, Response } from "express-serve-static-core";


export const getAllItems = async (req: Request, res: Response) => {
    try {

        const items = await Item.find({}).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Items fetched successfully",
            data: items
        })

    } catch {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


export const getSearchItems = async (req: Request<{}, {}, {}, { q: string }>, res: Response) => {
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

        res.status(200).json({
            success: true,
            message: "Items fetched successfully",
            data: items
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
