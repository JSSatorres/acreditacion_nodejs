const nameEx = { peter: "nameExported"}
const pepeAge = 30

module.exports = {  
  nameEx,
  pepeAge,
  anotherKey: [20, "blue"],
}


//añadir propiedades a module

module.exports.user = "jose"

console.log(module);