const express = require("express")
const homeController = require("../controllers/homeController")
const weatherController = require("../controllers/weatherController")

const router = express.Router()

router.get("/", homeController.home)
router.get("/weather", weatherController.weather)

module.exports = router