// Clases y Objetos
// Ejemplo 8 : Herencia

class Developer {
    constructor(name, mainLanguage, framework) {
        this.name = name
        this.mainLanguage = mainLanguage
        this.framework = framework
    }

    get getName() {
        return this.name
    }
}

console.log("Ejemplo 8: Herencia entre dos clases")
const luisDev = new Developer("Luis", "Javascript", ["VueJS", "React (library)", "Angular"])
console.log(luisDev)

// Se utiliza extends para indicar que se hederará las propiedades de la clase padre (Developer)

class LaunchX extends Developer{   
}

const luisLaunchX = new LaunchX("Camilo", "PHP", "Laravel")
console.log(luisLaunchX)
console.log("Name LaunchX:",luisLaunchX.getName)