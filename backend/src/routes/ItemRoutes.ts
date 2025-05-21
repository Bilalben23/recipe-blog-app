import * as ItemsController from "@/controllers/ItemController.ts";
import { Router } from "express";

const router = Router();

router.get("/", ItemsController.getAllItems);

router.get("/search", ItemsController.getSearchItems);

export default router;