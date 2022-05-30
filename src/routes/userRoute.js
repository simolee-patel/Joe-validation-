const express = require("express");
const defaultController = require("../controllers/defaultController");
const userValidation = require("../controllers/user/user.validator");

const router = express.Router();

router.get("/", defaultController);

const { addUser, getUsers } = require("../controllers/user/user.controller");

router.get("/getUsers", getUsers);
router.post("/addUsers", addUser)

module.exports = router;