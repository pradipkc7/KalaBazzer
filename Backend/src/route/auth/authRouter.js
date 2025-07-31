const express = require("express");
const { authController } = require("../../controller/auth/authController.js");
const router = express.Router();
router.get("/init", authController.init);
router.post("/login", authController.login);

module.exports = { authRouter: router };
