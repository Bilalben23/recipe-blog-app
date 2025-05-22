import { Router } from "express";
import * as CategoryController from "@/controllers/categoryController.ts";


const router = Router();

router.get("/:category", CategoryController.getCategory);



export default router;