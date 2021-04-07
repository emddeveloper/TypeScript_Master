//interface and class

interface drievable {
  speed: number
  drive(): string
}

class Car implements drievable {
  speed = 0
  constructor(speed: number) {
    this.speed = speed
  }
  drive() {
    return `The speed is ${this.speed}`
  }
}

//creating instance of Car

const myCar = new Car(100)

const startDrive = (vehicle: drievable) => {
  console.log(vehicle.drive())
}

startDrive(myCar)
