import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import router from "./route/sendMessage.js";

const app = express();
app.use(express.json());


dotenv.config()

mongoose.connect(process.env.DB).then(() => console.log("db is connected")).catch((err) => console.log(err))


app.listen(3000, () => {
  console.log('server is running on port 3000')
})


app.use('/api/user', router)


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Serve Error"
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})