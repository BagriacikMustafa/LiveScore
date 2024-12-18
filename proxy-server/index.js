import express from 'express';
import cors from 'cors';
import apiRouter from './routes/api.js'; // Ana router
import accountRouter from './routes/account.js'; // Account router
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

// Middleware'ler
app.use(cors());
app.use(express.json()); // `req.body`'yi parse etmek için JSON desteği

// Veritabanı bağlantısı
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:3mtG35VcIBtqgKfp@cluster0.tntl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

// Veritabanı bağlantısını başlat
connectDB();

// API rotalarını bağla
app.use('/api', apiRouter);
app.use('/account', accountRouter); // Account rotasını bağla

// Sunucuyu başlat
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
