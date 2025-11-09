import { clerkClient, requireAuth, getAuth } from "@clerk/express";
import prisma from "../client.js";

export const protectedRoute = async (req, res, next) => {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ message: "no user id in the clerk session" });
  }
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user)
      return res.status(402).json({
        message: "no user in the DB, please sync clerk DB to your DB",
      });
    delete user.password;
    req.user = user;
    next();
  } catch (error) {
    console.error('error in protected route');
    return res.status(500).json({ message: error?.message });
  }
};
