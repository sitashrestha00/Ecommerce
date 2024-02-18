const express = require("express");
const { queryGPT } = require("../controllers/chatControllers");

const chatRoutes = express.Router();

chatRoutes.post("/", queryGPT);

module.exports = chatRoutes;
