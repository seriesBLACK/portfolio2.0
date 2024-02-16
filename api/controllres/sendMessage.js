import Message from "../models/messageSchema.js";
import { errorHandler } from "../utils/error.js";

export const sendMessage = async (req, res, next) => {
  const { content } = req.body;

  if (!content) return next(errorHandler(400, "You can not send an empty message !!"))

  const newMessage = new Message({
    content
  });

  try {
    await newMessage.save();
    res.status(200).json({ message: "message is sent " });
  } catch (error) {
    next(errorHandler(403, error))
  };

};

export const getMessage = async (req, res, next) => {
  try {
    const data = await Message.find();
    res.status(200).json(data);
  } catch (error) {
    next(errorHandler(404, error))
  }
}