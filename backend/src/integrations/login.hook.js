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
      if (evt?.type === "user.created" && have_all_require_fields(evt)) {
        userObject = {
          id: evt?.data?.id,
          email:
            evt?.data?.email_addresses?.[0]?.email_address ||
            evt?.data?.primary_email_address_id ||
            "",
          first_name: evt?.data?.first_name,
          last_name: evt?.data?.last_name,
        };
        createUser = await prisma.users.create({
          data: userObject,
        });

        return res.json({
          message: "Webhook received",
          data: createUser,
        });
      } else {
        return res.json({
          message: "Problem in integrating clerk and My DB",
        });
      }
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return res.status(400).send("Error verifying webhook");
    }
  }
);

const have_all_require_fields = (evt) => {
  try {
    if (
      (evt.data.id && evt.data.email_addresses[0].email_address) ||
      (evt.data.primary_email_address_id &&
        evt.data.first_name &&
        evt.data.last_name)
    )
      return true;
    return false;
  } catch (error) {
    return false;
  }
};

export default router;
