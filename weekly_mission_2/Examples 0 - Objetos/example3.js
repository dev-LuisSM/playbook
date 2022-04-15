// OBJETOS - Example 3
// Creando un objeto con diferentes propiedades

const milaneso = {
  name: "Milo",
  age: 3,
  nickname: ["Milo", "Milaneso", "Milongas"],
  fav_toy: "rocks",
  address: {
    street: "Mejoramiento Urbano 48",
    zip_code: 42186,
    city: "Pachuca",
  },
};

console.log("Ejemplo 3: Objeto con diferentes propiedades");
console.log("Objeto: ", milaneso);
console.log("Nombre: ", milaneso.name);
console.log("Calle:", milaneso.address.street);
