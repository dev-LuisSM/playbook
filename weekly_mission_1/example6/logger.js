class Logger {
    constructor(name){
        this.count = 0
        this.name = name
    }

    log(message){
        this.count++
        console.log(`[${this.name}] ${message}`)
    }
}

module.exports = new Logger('DEFAULT') // Se instancia
module.exports.Logger = Logger // Clase