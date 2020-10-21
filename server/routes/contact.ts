import express, { Request, Response } from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const contactRouter = express.Router();

const smtp = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

contactRouter.post("/", async (req: Request, res: Response) => {
  const { inquery } = req.body;
  const { title, email, value } = inquery;
  const returnMessage = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: `${title}from:${email}`,
    text: value,
  };

  // メール送信
  try {
    smtp.sendMail(returnMessage, function (error, info) {
      // エラー発生時
      if (error) {
        console.log("send failed");
        console.log(error.message);
        res.json({ message: "再度、お問い合わせください。" });
        return;
      }
      // 送信成功
      console.log("send successful");
      console.log(info.messageId);
    });
  } catch (e) {
    console.log("Error", e);
  }
  res.json({ message: "問合わせを受付けました" });
});

export { contactRouter };
