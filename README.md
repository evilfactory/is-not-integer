![npm](https://img.shields.io/npm/v/is-not-integer)

# Is-not-integer

Checks if something is **NOT** a integer

### Example


```
isnotnumber = require("is-not-integer")

console.log(isnotnumber(50)) // false
console.log(isnotnumber('50')) // true
console.log(isnotnumber(32.3)) // true
console.log(isnotnumber(['no','well','why','i','created','this'])) // true


console.log(isnotnumber(50, 50000)) // More precision = better

console.log(isnotnumber()) // magic
```

## License

This project is licensed under the GNU License - read the [LICENSE](LICENSE) file for details
