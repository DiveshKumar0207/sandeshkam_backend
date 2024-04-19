import express from "express";
const router = express.Router();

import authController from "../Controllers/auth";

router.get("/login", authController.login);

export default router;
