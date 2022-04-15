// Clases y Objetos
// Ejemplo 6 : Getters and Setters

class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }

    get getStudents(){
        return this.students
    }

    get getLives(){
        return this.lives
    }

    set setStudent(students){
        this.students = students
    }
    
    set setLives(lives){
        this.lives = lives
    }
}

console.log("Ejemplo 6: Getters y Setters")
const MC = new MissionCommander("Carlo", "NodeJs")
console.log("Antes de los setters: ")
console.log("Students:",MC.getStudents) // 0 por default
console.log("Lives:",MC.getLives) // 0 por default

MC.setLives = 3
MC.setStudent = 100

console.log("Después de los setters: ")
console.log("Students:",MC.getStudents) // 100 students
console.log("Lives:",MC.getLives) // 3 lives