class Explorer {
    constructor(name, user, mission) {
        this.name = name
        this.user = user
        this.mission = mission
    }

    getNameUser(){
        return `Explorer ${this.name}, user ${this.user}`
    }
}

class Viajero extends Explorer {
    constructor(name, user, mission, cycle) {
        super(name, user, mission) // SUPER ayudará a llamar el constructor padre
        this.cycle = cycle
    }

    getGeneralInfo() {
        let nameAndUser = this.getNameUser() // Llamada al método del padre
        return `${nameAndUser}, ciclo ${this.cycle}`
    }
}

const viajero = new Viajero("Luis", "LaunchX", "NodeJs", "Abril 20220")
console.log("Ejemplo 9: Overriding")
console.log(viajero)
console.log(viajero.getNameUser()) // Llamada al método del padre
console.log(viajero.getGeneralInfo()) // Llamada al método de Overriding