import dotenv from "dotenv";
dotenv.config();


const ENV_VARS = {
    PORT: Number(process.env.PORT) || 5000,
    FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",
    MONGODB_URI: process.env.MONGO_URI || "mongodb://localhost:27017",
}

export default ENV_VARS;
