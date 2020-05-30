const router = require("express").Router();
const bookingRoutes = require("./bookings");
const reviewRoutes = require("./reviews");
const classbookingRoutes = require("./classbookings");
const issuereportRoutes = require("./issuereports")


//  routes
router.use("/bookings", bookingRoutes);
router.use("/classbookings", classbookingRoutes);
router.use("/reviews", reviewRoutes);
router.use("/issuereports", issuereportRoutes);



module.exports = router;
