import dotenv from "dotenv";
import express from "express";
import {createProxyMiddleware} from "http-proxy-middleware";
import {sequelize } from "./database/connect.js";
import { Story, story_categoryR, Comment , categoryReader, storyReader} from './routes/index.js';
import cors from "cors"
import {categoryA, storyA, userA } from './routes/index.js'
dotenv.config();
const app = express();
// Initialize Sequelize
sequelize.sync()
  .then(() => {
    console.log('Database synchronized.');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
// call api
app.use('/api',cors({ origin: '*' }),categoryReader)
app.use('/api',cors({ origin: '*' }),storyReader)
app.use('/api',cors({ origin: '*' }),Story)
app.use('/api',cors({ origin: '*' }),story_categoryR)
app.use('/api',cors({ origin: '*' }),Comment)
app.use('/api',cors({ origin: '*' }),categoryA)
app.use('/api',cors({ origin: '*' }),storyA)
app.use('/api',cors({ origin: '*' }),userA)
// Cấu hình proxy middleware
var options = {
  target: "http://localhost:5000", // Địa chỉ máy chủ hoặc API bạn muốn proxy đến
  changeOrigin: true, // Cần thiết để proxy cho các trang web có tên miền ảo
  ws: true, // Proxy cho websockets
  pathRewrite: {
    "^/api": "/api"
    }
};
// Tạo proxy (mà không cần context)
var exampleProxy = createProxyMiddleware(options);
app.use("/api", exampleProxy);

// Định nghĩa cổng và khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.on("error", (error) => {
  console.error(`Server error: ${error.message}`);
});
