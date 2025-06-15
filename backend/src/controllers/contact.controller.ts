import { ContactMessage } from "@/models/contact.model.ts";
import { ContactMessageInput } from "@/schemas/contact.schema.ts";
import type { Request, Response } from "express-serve-static-core";


export const getPaginatedContactMessages = async (req: Request<{}, {}, {}, { page?: number, limit?: number }>, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    try {
        const contactMessages = await ContactMessage.find({})
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean()

        const total = await ContactMessage.countDocuments();

        res.status(200).json({
            success: true,
            message: "Contact messages retrieved successfully",
            data: contactMessages,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Failed to retrieve contact messages"
        })
    }
}


export const getContactMessageById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    try {
        const contact = await ContactMessage.findById(id);

        if (!contact) {
            res.status(404).json({
                success: false,
                message: "Contact message not found"
            })
            return;
        }

        res.status(200).json({
            success: true,
            message: "Contact message retrieved successfully",
            data: contact

        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Failed to retrieve contact messages"
        })
    }
}


export const createContactMessage = async (req: Request<{}, {}, ContactMessageInput>, res: Response) => {
    try {

        const contact = await ContactMessage.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Message received successfully',
            data: contact
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Failed to create contact message"
        })
    }
}


export const deleteContactMessage = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    try {
        const deletedContactMessage = await ContactMessage.findByIdAndDelete(id);
        if (!deletedContactMessage) {
            res.status(404).json({
                success: false,
                message: "Contact message not found"
            })
            return;
        }

        res.status(200).json({
            success: true,
            message: "Contact message deleted successfully",
            data: deletedContactMessage
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Failed to delete contact message"
        })
    }
}