const ffi = require("ffi-napi")

const add = new ffi.Library("Addition", {
  "Addition": ["double", ["double", "double"]]
})

console.log(add.Addition(15, 25))