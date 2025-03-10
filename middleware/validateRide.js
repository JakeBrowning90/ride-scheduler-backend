const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validateRide = [
  body("clientName").trim(),
  body("clientPhone").trim(),
  body("pickUpLocation").trim(),
  body("dropOffLocation").trim(),
  body("pickUpTime").isISO8601().toDate(),
  body("passengerCt").toInt(),
  body("hasLuggage").toBoolean(),
  body("jobStatus").trim(),
];

module.exports = validateRide;
