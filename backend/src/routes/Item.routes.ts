import * as ItemsController from "src/controllers/Item.controller.ts";
import { validateRequest } from "src/middlewares/validateRequest.ts";
import { createItemSchema } from "src/schemas/item.schema.ts";
import { Router } from "express";

const router = Router();

// List & search routes
router.get("/", ItemsController.getAllItems);
router.get("/search", ItemsController.getSearchItems);

// Category-related route
router.get("/category/:category", ItemsController.getItemsByCategory);

// Specific item by id (dynamic)
router.get("/:id", ItemsController.getItemById);

// CRUD operations
router.post("/", validateRequest({ body: createItemSchema }), ItemsController.createItem);
router.put("/:id", ItemsController.updateItem);
router.delete("/:id", ItemsController.deleteItem);


export default router;