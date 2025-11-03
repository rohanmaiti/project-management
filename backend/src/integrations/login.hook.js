import express from "express";
import { verifyWebhook } from "@clerk/express/webhooks";
import prisma from "../client.js";
const router = express.Router();

router.post(
  "/webhooks",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const evt = await verifyWebhook(req);
      if (!evt) return res.json({ message: "Problem integrating user to DB" });

      let userObject;
      let createUser;
      console.log(evt.type);
      if (evt?.type === "user.created") {
        userObject = {
          id: evt?.data?.id,
          email: evt?.data?.email_addresses[0].email_address,
          password: evt?.data?.password_enabled ? evt?.data?.password : "",
          first_name: evt?.data?.first_name,
          last_name: evt?.data?.last_name,          
        };
        createUser = await prisma.users.create({
          data: userObject,
        });
      }

      return res.json({
        message: "Webhook received",
        data: createUser,
      });
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return res.status(400).send("Error verifying webhook");
    }
  }
);

export default router;
