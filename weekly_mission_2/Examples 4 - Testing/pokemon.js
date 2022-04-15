export default class Pokemon{
    constructor(name, type, age) {
        this.name = name
        this.type = type
        this.age = age
        this.attacks = []
    }

    get getAttacks() {
        return this.attacks
    }

    set setAttacks(attacks) {
        return this.attacks = attacks
    }
}

const myPkm = new Pokemon("Charmander", "Fuego", 10)
console.log(myPkm)