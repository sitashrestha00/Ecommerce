const express = require("express");
const { createUser, loginUser } = require("../controllers/authControllers");

const authRoutes = express.Router();

authRoutes.post("/create",createUser);

authRoutes.post("/login",loginUser);

module.exports = authRoutes;