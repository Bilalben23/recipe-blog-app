import { Router } from "express";
import * as CategoryController from "src/controllers/category.controller.ts";
import { createCategorySchema, updateCategorySchema } from "src/schemas/category.schema.ts";
import { validateRequest } from "src/middlewares/validateRequest.ts";


const router = Router();

router.get("/", CategoryController.getAllCategories);

router.get("/:id", CategoryController.getCategoryById);

router.post("/", validateRequest({ body: createCategorySchema }), CategoryController.createCategory);

router.patch("/:id", validateRequest({ body: updateCategorySchema }), CategoryController.updateCategory);

router.delete("/:id", CategoryController.deleteCatgeory);



export default router;