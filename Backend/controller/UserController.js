import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { generateAccessToken, generateRefreshToken } from "../token.js";

dotenv.config();

//user Register
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered!" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({
      message: "User registered successfully!",
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: "Validation failed", errors: messages });
    }

    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(400).json({ message: `${field} already exists!` });
    }

    console.error("Registration error:", error);
    res.status(500).json({ message: "そこでエラーが発生しました、しばらくしてからもう一度試してください。" });
  }
};

//Login User 
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      message: "Login successful!",
      accessToken,
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);

    if (error.message.includes("JWT_SECRET") || error.message.includes("JWT_REFRESH_SECRET")) {
      return res.status(500).json({ message: "Server configuration error, please contact support." });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: "Validation failed", errors: messages });
    }

    res.status(500).json({ message: "Server error, please try again later." });
  }
};

//get logged user details
export const getLoggedUser = async (req, res) => {
    try{
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];

        if(!token) {
            return res.status(401).json({ message: "Access Token Missing !"});
        }
        const user = await User.findOne({_id:decodedTextSpanIntersectsWith.userId });
        if(!user) {
            return res.status(404).json({ message: "User not Found !"});
        }
        res.status(200).json(user);
    }catch (error) {
        return res
            .status(403)
            .json({ message: "Invalid", error});
    }
}

//Refresh Access Token
export const refreshAccessToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken)
            return res.status(401).json({ message: "Refresh token missing !" });
        
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await User.findById(decoded.userId);

        const newAccessToken = generateAccessToken(user._id);
        res.status(200).json({ accessToken: newAccessToken });
    }catch (error) {
        return res
            .status(403)
            .json({ message: "Invalid or expire refresh toke" })
    }
};

//Logout
export const logout = async ( req, res) => {
    try{
        res.clearCookie("refreshToken");
        res.status(200).json({ message: "Logout Successfull !" });
    }catch (error) {
        return res.status(500).json({ message: "server error !", error });
    }
}