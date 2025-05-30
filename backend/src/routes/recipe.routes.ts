import { Router } from "express";
import { fetchRecipeBlogs } from "src/controllers/recipe.controller.ts";

const router = Router();

router.get("/blogs", fetchRecipeBlogs);

export default router;