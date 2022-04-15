// Ejemplo 1: for Each para imprimir elementos de una lista
const numbers = [1, 2, 3, 4, 5];
console.log("Ejemplo 1: Imprimiendo los elementos de una lista")
numbers.forEach(num => console.log(num))

console.log("- - - - - - - - -")

// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => sum += num)
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista")
console.log(sum)

console.log("- - - - - - - - -")

// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log("Ejemplo 5: Imprimiendo la lista de países en mayúsculas")
countries.forEach((element) => console.log(element.toUpperCase()))