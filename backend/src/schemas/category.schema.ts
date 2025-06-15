import { z } from "zod";


export const createCategorySchema = z.object({
    name: z.string()
        .trim()
        .toLowerCase()
        .min(1, "Category name is required"),
    menuId: z.number()
        .int()
        .positive("menuId must be a positive integer")
})


export const updateCategorySchema = createCategorySchema.partial();


export type CreateCategoryInput = z.infer<typeof createCategorySchema>;

export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
