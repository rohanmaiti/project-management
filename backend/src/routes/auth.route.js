import express from "express";
import { get_custom_fileds, me } from "../controllers/auth.controller.js";
import { protectedRoute } from "../middlewares/getuser.middleware.js";
const router = express.Router();

router.get("/v1/me", protectedRoute, me);
router.get('/v1/get-custom-fields', protectedRoute, get_custom_fileds);

export default router;
