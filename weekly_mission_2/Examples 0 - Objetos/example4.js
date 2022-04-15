// OBJETOS - Example 3
// Creando objeto con diferentes métodos

const milaneso = {
    name: 'Milo',
    // Esto arroja undefined
    // Según MDN : No tiene propios enlaces a this o super, no debe de ser usado como métodos
    // bark: () => {

    bark: function () {
        console.log(`Hello, my name is ${this.name} and i like to bark`)
    },
    catch_rock: () => { 
        console.log(`I love rocks!`)
    }
}
console.log("Ejemplo 4: Objeto con métodos");
milaneso.bark()
milaneso.catch_rock()