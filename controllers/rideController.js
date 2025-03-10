const asyncHandler = require("express-async-handler");

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_ride = asyncHandler(async (req, res, next) => {
  res.json("Create ride");
});

exports.read_ride_all = asyncHandler(async (req, res, next) => {
  res.json("Read all rides");
});

exports.read_ride_one = asyncHandler(async (req, res, next) => {
  res.json("Read one ride");
});

exports.update_ride = asyncHandler(async (req, res, next) => {
  res.json("Update ride");
});

exports.delete_ride = asyncHandler(async (req, res, next) => {
  res.json("Delete ride");
});
