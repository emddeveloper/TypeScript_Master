interface postGateKeeper {
  title: string
  age: number
  publish: boolean
}
const post = {
  title: "My heading",
  age: 55,
  publish: true
}

const printPost = (postToBePrint: postGateKeeper) => {
  console.log(`${postToBePrint.title} and the age is ${postToBePrint.age}`)
}

printPost(post)
