import express from "express";
import { createNews, getAllNews, getNewsById, updateNews, deleteNews, getLatestNews } from "../controller/NewsController.js";

const router = express.Router();

//News
router.post("/", createNews);
router.get("/",getAllNews);
router.get("/latest", getLatestNews);
router.get("/:id", getNewsById);
router.post("/:id", updateNews);
router.delete("/:id", deleteNews);

export default router;