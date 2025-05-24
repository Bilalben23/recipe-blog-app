import { Router } from "express";
import { subscribeToNewsletter } from "@/controllers/newsletter.controller.ts";
import { validateRequest } from "@/middlewares/validateRequest.ts";
import { newsletterSubscriptionSchema } from "@/schemas/newsletter.schema.ts";

const router = Router();


router.post("/subscribe", validateRequest({ body: newsletterSubscriptionSchema }), subscribeToNewsletter);


export default router;