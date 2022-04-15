import Viajero from "./viajero.js"

// Así se modularizan clases y como usarlas en módulos

const viajero = new Viajero("Luis", "LaunchX", "NodeJs", "Abril 2022")
console.log(viajero)
console.log(viajero.getNameandUser)
console.log(viajero.getGeneralInfo)