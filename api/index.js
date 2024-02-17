import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./route/sendMessage.js";
import path from "path";


const app = express();
app.use(express.json());

const __dirname = path.resolve();

dotenv.config();

mongoose.connect(process.env.DB).then(() => console.log("db is connected")).catch((err) => console.log(err))


app.listen(3000, () => {
  console.log('server is running on port 3000')
})


app.use('/api/user', router);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Serve Error"
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})