const express = require("express");

const { auth, validation } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const validationMiddleware = validation(schemas.addSchema);
const validationMiddlewareFavorite = validation(schemas.updateFavoriteSchema);

const router = express.Router();

router.get("/", auth, ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", auth, validationMiddleware, ctrl.add);

router.delete("/:contactId", ctrl.remove);

router.put("/:contactId", validationMiddleware, ctrl.update);

router.patch(
  "/:contactId/favorite",
  validationMiddlewareFavorite,
  ctrl.updateStatusContact
);

module.exports = router;
