import { Router } from "express";
import * as CategoryController from "@/controllers/category.controller.ts";
import { validateRequest } from "@/middlewares/validateRequest.ts";
import { createCategorySchema, updateCategorySchema } from "@/schemas/category.schema.ts";


const router = Router();

router.get("/", CategoryController.getAllCategories);

router.get("/:id", CategoryController.getCategoryById);

router.post("/", validateRequest({ body: createCategorySchema }), CategoryController.createCategory);

router.patch("/:id", validateRequest({ body: updateCategorySchema }), CategoryController.updateCategory);

router.delete("/:id", CategoryController.deleteCategory);



export default router;