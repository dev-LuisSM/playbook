// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)

// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
  { name: 'A', score: 95 },
  { name: 'M', score: 80 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
]

const score_less_than_80 = scores12.find((user) => user.score < 80)
console.log("Ejemplo 12: Name score found: " + score_less_than_80.name)

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que 
// cumpla con la validación que indiques.
const names13 = ['EXP0', 'Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición: "+ result)