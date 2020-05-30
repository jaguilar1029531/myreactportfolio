const router = require("express").Router();
const classbookingsController = require("../../controllers/classbookingsController");

// Matches with "/api/classbookings"
router.route("/")
  .get(classbookingsController.findAll)
  .post(classbookingsController.create);

// Matches with "/api/classbookings/:id"
router
  .route("/:id")
  .get(classbookingsController.findById)
  .put(classbookingsController.update)
  .delete(classbookingsController.remove);

module.exports = router;
