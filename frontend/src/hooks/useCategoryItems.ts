import axiosInstance from "@api/axios";
import { CategoryName } from "@constants/categories";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";


const itemSchema = z.object({
    _id: z.string(),
    name: z.string(),
    thumbnail_image: z.string().url(),
    category: z.object({
        _id: z.string(),
        name: z.string()
    }),
    more: z.object({
        prep_time: z.string(),
        difficulty: z.enum(["easy", "medium", "hard"]),
    })
});

// Full response schema matching your API
const responseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(itemSchema),
});

type ItemResponse = z.infer<typeof itemSchema>;

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
        }
    })
}