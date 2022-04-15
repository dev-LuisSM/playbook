// Clases y Objetos
// Ejemplo 3 : Instanciar un objeto con atributos
// Ejemplo 4 : Uso de métodos en objetos

class Me {
  constructor(name, age, subjects) {
    this.name = name;
    this.age = age;
    this.subjects = subjects;
  }

  getInfo() {
    return `Hello, my name is ${this.name}, I'm ${this.age} years old and my subjects are ${this.subjects[0]} and ${this.subjects[1]}`;
  }
}

const luisMe = new Me("Luis", 23, ["NodeJs", "Javascript"]);
console.log("Ejemplo 3 : Instanciar un objeto con atributos");
console.log(luisMe);
console.log("Ejemplo 4 : Uso de métodos");
console.log(luisMe.getInfo());
