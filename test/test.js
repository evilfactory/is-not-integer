isnotnumber = require("../index.js")

console.log(isnotnumber(50)) // false
console.log(isnotnumber('50')) // true
console.log(isnotnumber(32.3)) // true
console.log(isnotnumber(['no','well','why','i','created','this'])) // true


console.log(isnotnumber(50, 50000)) // More precision = better

console.log(isnotnumber())