import * as ContactMessageController from "@/controllers/contact.controller.ts";
import { validateRequest } from "@/middlewares/validateRequest.ts";
import { contactMessageSchema } from "@/schemas/contact.schema.ts";
import { Router } from "express";

const router = Router();

router.get("/", ContactMessageController.getPaginatedContactMessages);

router.get("/:id", ContactMessageController.getContactMessageById);

router.post("/", validateRequest({ body: contactMessageSchema }), ContactMessageController.createContactMessage);

router.delete("/:id", ContactMessageController.deleteContactMessage)


export default router;