const express = require("express");

const { auth, validation } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const validationMiddleware = validation(joiRegisterSchema);
const validationLoginMiddleware = validation(joiLoginSchema);

const router = express.Router();

router.post("/register", validationMiddleware, ctrl.register);
router.post("/login", validationLoginMiddleware, ctrl.login);
router.get("/logout", auth, ctrl.logout);

module.exports = router;
