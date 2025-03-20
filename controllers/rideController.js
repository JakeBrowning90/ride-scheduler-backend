const asyncHandler = require("express-async-handler");

// To-do: validate create ride
const validateRide = require("../middleware/validateRide");

// Import Prisma
const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");
const prisma = new PrismaClient();

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_ride = [
  validateRide,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      const newRide = await prisma.ride.create({
        data: {
          clientName: req.body.clientName,
          clientPhone: req.body.clientPhone,
          pickUpLocation: req.body.pickUpLocation,
          dropOffLocation: req.body.dropOffLocation,
          pickUpTime: req.body.pickUpTime,
          passengerCt: req.body.passengerCt,
          hasLuggage: req.body.hasLuggage,
          notes: req.body.notes,
          jobStatus: "new",
        },
      });
      res.json(newRide);
    }
  }),
];

exports.read_ride_all = asyncHandler(async (req, res, next) => {
  const allRides = await prisma.ride.findMany({
    orderBy: [
      {
        pickUpTime: "asc",
      },
    ],
  });
  res.json(allRides);
});

exports.read_ride_one = asyncHandler(async (req, res, next) => {
  const ride = await prisma.ride.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  res.json(ride);
});

exports.update_ride = [
  validateRide,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      const updatedRide = await prisma.ride.update({
        where: { id: parseInt(req.params.id) },
        data: {
          clientName: req.body.clientName,
          clientPhone: req.body.clientPhone,
          pickUpLocation: req.body.pickUpLocation,
          dropOffLocation: req.body.dropOffLocation,
          pickUpTime: req.body.pickUpTime,
          passengerCt: req.body.passengerCt,
          hasLuggage: req.body.hasLuggage,
          notes: req.body.notes,
          jobStatus: req.body.jobStatus,
        },
      });
      res.json(updatedRide);
    }
  }),
];

exports.delete_ride = asyncHandler(async (req, res, next) => {
  await prisma.ride.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json("Ride deleted");
});
