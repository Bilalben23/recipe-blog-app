import express from "express";
import ENV_VARS from "./configs/envVars.ts";
import cors from "cors";
import { connectToDB } from "./configs/connectDB.ts";
import itemsRoutes from "./routes/Item.routes.ts";
import categoryRoutes from "./routes/category.routes.ts";
import newsletterRoutes from "./routes/newsletter.routes.ts";
import recipeRoutes from "./routes/recipe.routes.ts";
import contactRoutes from "./routes/contact.routes.ts";

const app = express();


// Middleware to parse JSON requests
app.use(express.json());
// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Middleware to handle CORS
app.use(cors({
    origin: [ENV_VARS.FRONTEND_URL, "http://192.168.8.100:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))

connectToDB();

app.use("/api/v1/items", itemsRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/newsletter", newsletterRoutes);
app.use("/api/v1/recipe", recipeRoutes);
app.use("/api/v1/contact", contactRoutes);


//app.listen(ENV_VARS.PORT, () => {
//  console.log(`Server is running on port ${ENV_VARS.PORT}`);
//})

export default app;