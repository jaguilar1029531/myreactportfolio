const router = require("express").Router();
const issuereportsController = require("../../controllers/issuereportsController");

// Matches with "/api/bookings"
router.route("/")
  .get(issuereportsController.findAll)
  .post(issuereportsController.create);

// Matches with "/api/bookings/:id"
router
  .route("/:id")
  .get(issuereportsController.findById)
  .put(issuereportsController.update)
  .delete(issuereportsController.remove);

module.exports = router;
