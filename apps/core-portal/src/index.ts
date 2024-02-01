import { Car } from "@src/car";
import { Car as SharedCar } from "@shared/models";

import express from "express";

console.log("Hello from core-portal");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from core-portal");
});

app.get("/local-car", (req, res) => {
  const car = new Car("Ford", "Fiesta");
  res.send(car);
});

app.get("/shared-car", (req, res) => {
  const car = new SharedCar(2, "Ford", 3);
  res.send(car);
});

const PORT = process.env.PORT || 38763;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
