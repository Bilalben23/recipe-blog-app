import { Router } from "express";
import { fetchRecipeBlogs } from "../controllers/recipe.controller.ts";

const router = Router();

router.get("/blogs", fetchRecipeBlogs);

export default router;