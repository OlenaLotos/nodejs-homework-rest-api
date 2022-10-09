const contactsOperations = require("../../models/contacts");
const createError = require("http-errors");

const update = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.updateById(contactId, req.body);

    if (!result) {
      throw createError(404, `Contact with contactId ${contactId} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
