![npm](https://img.shields.io/npm/v/is-not-integer)

# Is-not-integer

Checks if something is **NOT** a integer

### Example


```
isnotinteger = require("is-not-integer")

console.log(isnotinteger(50)) // false
console.log(isnotinteger('50')) // true
console.log(isnotinteger(32.3)) // true
console.log(isnotinteger(['no','well','why','i','created','this'])) // true


console.log(isnotinteger(50, 50000)) // More precision = better

console.log(isnotinteger()) // magic
```

## License

This project is licensed under the GNU License - read the [LICENSE](LICENSE) file for details
