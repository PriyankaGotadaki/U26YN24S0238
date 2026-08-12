//4.write a Node js pgm to create and use reusable utility module for student marks calculation.
const marks=require("./marks.js")
let total=marks.calculateTotal(50,60,70)
let avg=marks.calculatePercentage(total)
console.log(`Total marks of three subjects=${total}`)
console.log(`Percentage=${avg}`)