import { connect } from "mongoose";
import ENV_VARS from "./envVars.ts";


export const connectToDB = () => {
    try {
        connect(ENV_VARS.MONGODB_URI);
        console.log("Connected to MongoDB database successfully at:", ENV_VARS.MONGODB_URI);
    } catch(err) {
        console.error("Error connecting to the database:", err);
    }
}