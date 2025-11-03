import express from "express";
import { me } from "../controllers/auth.controller.js";
import { protectedRoute } from "../middlewares/getuser.middleware.js";
const router = express.Router();

router.get("/v1/me", protectedRoute, me);

export default router;
