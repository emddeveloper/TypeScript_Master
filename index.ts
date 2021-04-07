//Generic function
const valueWrapper = <T>(value: T): T[] => {
  return [value]
}

const numberWrapper = valueWrapper<number>(10)
console.log(numberWrapper)
//Or we can write, here TS automatically understand the type is number
const numberWrapper1 = valueWrapper(20)
console.log(numberWrapper1)

//for string

const stringWrapper = valueWrapper<string>("Hello")
console.log(stringWrapper)
//Or we can write, here TS automatically understand the type is string

const stringWrapper1 = valueWrapper("Hello two")
console.log(stringWrapper1)
