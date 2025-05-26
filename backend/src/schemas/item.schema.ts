import { z } from "zod";


export const instructionSchema = z.object({
    stepTitle: z.string()
        .trim()
        .min(1, "Step title is required")
        .max(100, "Step title is too long"),
    stepDescription: z.string()
        .trim()
        .min(1, "Step description is required")
        .max(1000, "Step description is too long"),
});


export const ingredientSchema = z.object({
    name: z.string()
        .min(1, "Ingredient name is required"),
    quantity: z.string()
        .min(1, "Ingredient quantity is required"),
})


export const commentSchema = z.object({
    user: z.string()
        .trim()
        .min(1, "User name is required"),
    comment: z.string()
        .trim()
        .min(1, "Comment is required"),
})

export const moreSchema = z.object({
    prep_time: z.string()
        .trim()
        .min(1, "Preparation time is required"),
    cook_time: z.string()
        .trim()
        .min(1, "Cooking time is required"),
    servings: z.string()
        .trim()
        .min(1, "Services info is required"),
    difficulty: z.enum(["easy", "medium", "hard"], {
        required_error: "Difficulty is required"
    }),
    source: z.string()
        .trim()
        .min(1, "Source is required")
})


export const createItemSchema = z.object({
    menuId: z.number()
        .int()
        .positive("Menu ID must be a positive integer"),
    name: z.string()
        .trim()
        .min(1, "Name is required")
        .toLowerCase(),
    thumbnail_image: z.string()
        .url("Thumbnail must be a valid URL"),
    category: z.string()
        .min(1, "Category is required"),
    description: z.string()
        .min(30, "Description must be at least 30 characters")
        .max(300, "Description must be at most 300 characters")
        .optional(),
    instructions: z.array(instructionSchema)
        .min(1, "At least one instruction is required"),
    tags: z.array(z.string()).optional(),
    ingredients: z.array(ingredientSchema, { required_error: "ingredient field is required" })
        .min(1, "At least one ingredient is required"),
    comments: z.array(commentSchema)
        .optional(),
    more: moreSchema
});


export type CreateItemInput = z.infer<typeof createItemSchema>;
export type IngredientInput = z.infer<typeof ingredientSchema>;
export type CommentInput = z.infer<typeof commentSchema>;
export type MoreInput = z.infer<typeof moreSchema>;
