import { Car as SharedCar } from "@shared/models";

import { Car } from "@src/car";

console.log("Hello from core-portal");
const car = new Car("Ford", "Fiesta");
console.log("local car", car);
const sharedCar = new SharedCar(1, "Ford", 2);
console.log("shared car", sharedCar);
