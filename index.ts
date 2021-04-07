//Generic class

class valueHolder<typeOf> {
  value: typeOf

  constructor(value: typeOf) {
    this.value = value
  }
}

const numberHolder = new valueHolder<number>(10)

console.log(numberHolder.value)

const stringHolder = new valueHolder<string>("Hello")

console.log(stringHolder.value)

const booleanHolder = new valueHolder<boolean>(true)

console.log(booleanHolder.value)
