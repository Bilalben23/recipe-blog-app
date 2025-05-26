import axiosInstance from '@api/axios'
import { useQuery } from '@tanstack/react-query'
import { z } from "zod";

const instructionSchema = z.object({
    stepTitle: z.string(),
    stepDescription: z.string()
})

// More info schema
const moreSchema = z.object({
    prep_time: z.string(),
    cook_time: z.string(),
    servings: z.string(),
    difficulty: z.enum(["easy", "medium", "hard"]),
    source: z.string(),
});

// Item schema
const itemSchema = z.object({
    _id: z.string(),
    menuId: z.number(),
    name: z.string(),
    thumbnail_image: z.string().url(),
    category: z.object({
        _id: z.string(),
        name: z.string()
    }),
    description: z.string(),
    instructions: z.array(instructionSchema),
    tags: z.array(z.string()),
    ingredients: z.array(z.object({
        name: z.string(),
        quantity: z.string(),
    })),
    comments: z.array(z.object({
        user: z.string(),
        comment: z.string(),
    })),
    more: moreSchema,
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    __v: z.number(),
})

// Response schema
const responseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: itemSchema,
});

type Item = z.infer<typeof itemSchema>;

export function useItem(id: string) {
    return useQuery<Item>({
        queryKey: ["items", id],
        enabled: !!id,
        queryFn: async () => {
            const { data } = await axiosInstance(`/v1/items/${id}`);

            const parsed = responseSchema.safeParse(data);
            if (!parsed.success) {
                console.error("Zod validation failed", parsed.error.format());
                throw new Error("Invalid item response");
            }

            return parsed.data.data;
        },
    });
}
