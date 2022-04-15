// OBJETOS - Example 3
// Creando objeto con métodos que reciben parámetros

const milaneso = {
    name: 'Milaneso',
    sayHello: function (otherPet){
        console.log(`${this.name} está saludando a ${otherPet}`)
    }
}

console.log("Ejemplo 5: Objeto con métodos y parámetros");
milaneso.sayHello('Cocol')