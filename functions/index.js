import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { getAllItems, addNewItems, updateItemsById } from "./src/items.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req,res) => {
    logger.info("Someone hit my API. Wow.")
    res.send ("It's working")
});

app.get("/items", getAllItems)
app.post("/items", addNewItems)
app.patch("/items", updateItemsById)


export const api = onRequest(app)
