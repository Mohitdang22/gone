const express = require("express");
const LoginController = require("../controllers/LoginController");

const mainController = require("../controllers/MainController");

const router = express.Router();


router.route("/user").get(mainController.user);

router.route("/user").post(LoginController.user);

router.route("/product").get(mainController.product);

router.route("/product").post(LoginController.product);

router.route("/").get(mainController.home);

router.route("/productpage").get(mainController.productpage);




module.exports = router;

