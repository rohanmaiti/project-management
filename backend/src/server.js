import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import webhookRoute from "./integrations/login.hook.js";
import authRoutes from './routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: ["http://localhost:5174", "https://project-management-seven-gamma.vercel.app"],
    credentials: true,
  })
);
app.use(clerkMiddleware());
app.use(express.json());

app.use("/api", webhookRoute);
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`app listening at ${PORT}`);
});
