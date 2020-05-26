const express = require("express");
const router = express.Router();

//Controllers
const { viewsController } = require("../controllers");

router.get("/", viewsController.getHome);

module.exports = router;
