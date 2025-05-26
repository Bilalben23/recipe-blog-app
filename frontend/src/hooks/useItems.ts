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
        difficulty: z.enum(["easy", "medium", "hard"])
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
    }),
});

type ItemsResponse = z.infer<typeof responseSchema>;


export const useItems = ({ limit = 10, page = 1 }: { limit?: number; page?: number }) => {
    return useQuery<ItemsResponse>({
        queryKey: ['items', { limit, page }],
        queryFn: async (): Promise<ItemsResponse> => {
            const { data } = await axiosInstance.get('v1/items', {
                params: { limit, page },
            });

            const parsed = responseSchema.safeParse(data);

            if (!parsed.success) {
                console.error("Validation error:", parsed.error.format());
                throw new Error("Invalid response data");
            }

            return parsed.data;
        }
    });
};
