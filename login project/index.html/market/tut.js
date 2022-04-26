const people = [
    { name: "Kyle", age: 27, programmer: true },
    { name: "Sally", age: 15, programmer: false },
    { name: "John", age: 34, programmer: false },
    { name: "Beth", age: 72, programmer: true }
  ]
  console.table(people)
  
  console.log("Outside")

  console.group()
console.log("Inside First Group")
console.log("Still Inside First Group")
console.groupEnd()

console.group("Label")
console.log("Inside Second Group")

console.groupCollapsed()
console.log("Inside Nested Group")
console.groupEnd()

console.log("Still Inside Second Group")
console.groupEnd()

console.clear()

const person = { name: "may"}
console.log(person)
person.name = "mayor"

console.warn("warn")