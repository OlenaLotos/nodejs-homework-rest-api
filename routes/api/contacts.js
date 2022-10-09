const express = require("express");

const { validation } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validationMiddleware = validation(contactSchema);

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validationMiddleware, ctrl.add);

router.delete("/:contactId", ctrl.remove);

router.put("/:contactId", validationMiddleware, ctrl.update);

module.exports = router;
