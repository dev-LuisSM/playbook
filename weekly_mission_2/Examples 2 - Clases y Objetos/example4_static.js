// Clases y Objetos
// Ejemplo 7 : Métodos estáticos

class Toolbox {
    static getUsefulTools(){
        return ["Command Line", "Git", "Text Editor"]
    }
}

// Se puede llamar al método sin necesidad de instanciarlo
console.log("Ejemplo 7: Método estático")
console.log(Toolbox.getUsefulTools)

// Si se instancia, falla
// const toolbox = new Toolbox()
// console.log(toolbox.getMostUsefulTools()) // is not a function