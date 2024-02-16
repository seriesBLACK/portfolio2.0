import express from "express"
import { getMessage, sendMessage } from "../controllres/sendMessage.js";

const router = express.Router();

router.post('/message', sendMessage);
router.get('/getmessage', getMessage);


export default router