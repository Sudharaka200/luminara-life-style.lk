import express from 'express';
import { registerUser, loginUser, getLoggedUser, refreshAccessToken, logout } from '../controller/UserController.js'; 

const router = express.Router();

//user
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/", getLoggedUser);
router.post("/logout", logout);
router.get("/refresh", refreshAccessToken);

export default router;