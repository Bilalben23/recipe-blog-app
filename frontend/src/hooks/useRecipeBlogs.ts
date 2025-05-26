import axiosInstance from "@api/axios";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const blogSchema = z.object({
    id: z.number(),
    title: z.string(),
    image: z.string().url(),
    summary: z.string(),
    sourceUrl: z.string().url(),
});

const responseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(blogSchema),
});

type Blog = z.infer<typeof blogSchema>;

export const useRecipeBlogs = (number?: number) => {
    return useQuery<Blog[]>({
        queryKey: ['recipeBlogs', number],
        queryFn: async (): Promise<Blog[]> => {
            const { data } = await axiosInstance.get('/v1/recipe/blogs', {
                params: number ? { number } : {}
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
