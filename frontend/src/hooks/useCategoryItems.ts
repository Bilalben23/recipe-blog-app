import axiosInstance from "@api/axios";
import { CategoryName } from "@constants/categories";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const commentSchema = z.object({
    user: z.string(),
    comment: z.string(),
});

const moreSchema = z.object({
    prep_time: z.string(),
    cook_time: z.string(),
    services: z.string(),
    difficulty: z.string(),
    source: z.string(),
});

const ingredientSchema = z.object({
    name: z.string(),
    quantity: z.string(),
});

const itemSchema = z.object({
    _id: z.string(),
    menuId: z.number(),
    name: z.string(),
    thumbnail_image: z.string().url(),
    category: z.object({
        _id: z.string(),
        name: z.string(),
    }),
    instructions: z.string(),
    tags: z.array(z.string()).optional(),
    ingredients: z.array(ingredientSchema),
    comments: z.array(commentSchema).optional(),
    more: moreSchema,
    createdAt: z.string(),
    updatedAt: z.string(),
    __v: z.number(),
});

// Full response schema matching your API
const responseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(itemSchema),
});

export type ItemResponse = z.infer<typeof itemSchema>;


export const useCategoryItems = (category: CategoryName) => {
    return useQuery<ItemResponse[]>({
        queryKey: ["categoryItems", category],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`/v1/items/category/${category}`);

            // Validate response shape
            const parsed = responseSchema.safeParse(data);

            if (!parsed.success) {
                console.error("Validation error:", parsed.error.format());
                throw new Error("Invalid response data");
            }

            return parsed.data.data;
        },
    });
};
