import express from 'express';
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect DB:", error.message);
    process.exit(1);
  }
};

startServer();
