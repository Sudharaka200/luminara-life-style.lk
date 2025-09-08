import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './router/UserRoutes.js'; 
import realestateRoutes from './router/RealestateRoutes.js'
import newsRoutes from './router/NewsRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
// app.use(cookieParser());

// Routes
app.use('/users', userRoutes); 
app.use('/post', realestateRoutes);
app.use('/news', newsRoutes);

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Server error, please try again later.' });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to DB:', error.message);
    process.exit(1);
  }
};

startServer();