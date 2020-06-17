![npm](https://img.shields.io/npm/v/deezer-web-api) ![NPM](https://img.shields.io/npm/l/deezer-web-api?registry_uri=https%3A%2F%2Fregistry.npmjs.org)
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
