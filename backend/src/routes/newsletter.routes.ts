import { Router } from "express";
import { subscribeToNewsletter } from "src/controllers/newsletter.controller.ts";
import { validateRequest } from "src/middlewares/validateRequest.ts";
import { newsletterSubscriptionSchema } from "src/schemas/newsletter.schema.ts";

const router = Router();


router.post("/subscribe", validateRequest({ body: newsletterSubscriptionSchema }), subscribeToNewsletter);


export default router;