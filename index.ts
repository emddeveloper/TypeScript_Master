class Car {
  color: string
  year: number
  constructor(color: string, year: number) {
    this.color = color
    this.year = year
  }
  drive() {
    console.log("vroom")
  }
}

//instance of car
const myCar = new Car("red color", 2010)
myCar.drive()
console.log(myCar.color, myCar.year)
