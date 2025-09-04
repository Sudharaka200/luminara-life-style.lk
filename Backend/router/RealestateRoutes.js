import express from 'express';
import { createRealestate, getAllRealestate, getPostById, updatePost, deletePost } from '../controller/RealestateController.js';

const router = express.Router();

//Post
router.post("/", createRealestate);
router.get("/", getAllRealestate);
router.get("/:id", getPostById);
router.post("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;