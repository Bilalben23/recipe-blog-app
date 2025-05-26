import axiosInstance from "@api/axios";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

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
        difficulty: z.enum(["easy", "medium", "hard"]),
    })
});


const searchResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(itemSchema),
});

type SearchItem = z.infer<typeof itemSchema>;

export const useSearchItems = (query: string) => {
    return useQuery<SearchItem[]>({
        queryKey: ['searchItems', query],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`v1/items/search?q=${query}`);

            const parsed = searchResponseSchema.safeParse(data);

            if (!parsed.success) {
                console.error("Validation error:", parsed.error.format());
                throw new Error("Invalid response data");
            }

            return parsed.data.data;
        },
        enabled: !!query
    })
}
