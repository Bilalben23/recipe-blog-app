import express from "express";
import ENV_VARS from "./configs/envVars.ts";
import cors from "cors";
import { connectToDB } from "./configs/connectDB.ts";
import ItemsRoutes from "./routes/ItemRoutes.ts";


const app = express();


// Middleware to parse JSON requests
app.use(express.json());
// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Middleware to handle CORS
app.use(cors({
    origin: [ENV_VARS.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))


app.use("/api/v1/items", ItemsRoutes);


app.listen(ENV_VARS.PORT, () => {
    console.log(`Server is running on port ${ENV_VARS.PORT}`);
    connectToDB();
})