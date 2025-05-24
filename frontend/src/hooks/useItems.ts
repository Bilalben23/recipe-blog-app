import axiosInstance from "@api/axios";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

// Define the schema for each item
const itemSchema = z.object({
    _id: z.string(),
    name: z.string(),
    thumbnail_image: z.string().url(),
    category: z.object({
        _id: z.string(),
        name: z.string(),
    }),
    more: z.object({
        prep_time: z.string(),
        difficulty: z.string(),
    })
});

// Define the full API response schema
const responseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(itemSchema),
    pagination: z.object({
        total: z.number(),
        page: z.number(),
        limit: z.number(),
        totalPages: z.number(),
    }).optional(),
});

type Item = z.infer<typeof itemSchema>;

export const useItems = ({ limit = 10, page = 1 }: { limit?: number; page?: number }) => {
    return useQuery<Item[]>({
        queryKey: ['items', { limit, page }],
        queryFn: async () => {
            const { data } = await axiosInstance.get('v1/items', {
                params: { limit, page },
            });

            const parsed = responseSchema.safeParse(data);

            if (!parsed.success) {
                console.error("Validation error:", parsed.error.format());
                throw new Error("Invalid response data");
            }

            return parsed.data.data;
        }
    });
};
