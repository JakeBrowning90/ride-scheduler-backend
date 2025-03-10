const express = require("express");
const router = express.Router();

// Require controller
const rideController = require("../controllers/rideController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post("/", rideController.create_ride);

router.get("/", rideController.read_ride_all);

router.get("/:id", rideController.read_ride_one);

router.put("/:id", rideController.update_ride);

router.delete("/:id", rideController.delete_ride);

module.exports = router;
