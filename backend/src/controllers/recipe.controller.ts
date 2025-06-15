import ENV_VARS from "@/configs/envVars.ts";
import axios from "axios";
import type { Request, Response } from "express-serve-static-core";

interface RecipeBlog {
    id: number;
    title: string;
    image: string;
    summary: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
}


export const fetchRecipeBlogs = async (req: Request<{}, {}, {}, { number?: number }>, res: Response) => {
    const { number = 6 } = req.query;
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random`, {
            params: {
                number,
                apiKey: ENV_VARS.SPOONACULAR_API_KEY
            }
        })

        // Extract only needed data from each recipe
        const filteredBlogs: RecipeBlog[] = data.recipes.map((recipe: any) => ({
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            summary: recipe.summary,
            readyInMinutes: recipe.readyInMinutes,
            servings: recipe.servings,
            sourceUrl: recipe.sourceUrl
        }))

        res.status(200).json({
            success: true,
            message: "Fetched recipe blogs successfully",
            data: filteredBlogs
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Failed to fetch blogs"
        })
    }
}