-- CreateTable
CREATE TABLE "Ride" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientPhone" TEXT NOT NULL,
    "pickUpLocation" TEXT NOT NULL,
    "dropOffLocation" TEXT NOT NULL,
    "pickUpTime" TIMESTAMP(3) NOT NULL,
    "passengerCt" INTEGER NOT NULL,
    "hasLuggage" BOOLEAN NOT NULL,
    "jobStatus" TEXT NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);
