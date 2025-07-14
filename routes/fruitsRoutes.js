const express = require("express");
const fruitsRouter = express.Router();
const fruitsController = require("../controllers/fruitsController")

fruitsRouter.get('/', fruitsController.showAllFruits)
fruitsRouter.get("/:name", fruitsController.showFruit)
fruitsRouter.post("/", fruitsController.createFruit)

module.exports = fruitsRouter
