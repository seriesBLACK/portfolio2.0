import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    require: true
  }
}, { timestamps: true })

const Message = mongoose.model("message", messageSchema)
export default Message;

