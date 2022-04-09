class Logger {
    constructor(name){
        //Atributos
        this.name = name
    }

    // método info
    info(message){
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }

    // método verbose
    verbose(message){
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

module.exports = Logger