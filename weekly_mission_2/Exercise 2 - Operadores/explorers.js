const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
]

// Imprimir propiedad name de cada explorer
console.log("Explorers:")
explorers.forEach(nombre => console.log(nombre.name))
console.log("")

// Imprimir stack de cada explorer
console.log("Stacks:")
explorers.forEach(stack => console.log(stack.stack))
console.log("")

// Crear lista de stacks de cada explorer
const allStacks = explorers.map(stack => stack.stack)
console.log("All stacks:")
console.log(allStacks)
console.log("")

// Filtrar a los explorers que tengan Js en su stacks
const jsStack = explorers.filter((findJS) => findJS.stack.includes('js'))
console.log("Explorer que usan Js:")
jsStack.forEach(withJS => console.log(withJS.name))
console.log("")

// Primer explorer que sea de la CDMX
const CDMX = explorers.find((inCDMX) => inCDMX.city === 'CDMX')
console.log("Primer explorer de la CDMX:")
console.log(CDMX.name)
console.log("")

// Sima de todos los exercises_completed
const exercisesCompleted = explorers.reduce(
  (acc, exercise) =>
    acc + exercise.exercises_completed, 0
)
console.log("Número de ejercicios completos: ")
console.log(exercisesCompleted)
console.log("")

// Validación de si al menos uno contiene true en exercisesFinished en Frontend
const exercisesFinished = explorers.some(
  (task) => task.missions.frontend.exercisesFinished) 
console.log("¿Algún explorer terminó los ejercios de FrontEnd?:")
console.log(exercisesFinished)
console.log("")

// Validación de si todos contienen true en isFinished en Onboarding
const isFinished = explorers.every(
  (finished) => finished.missions.onboarding.isFinished
)
console.log("¿Todos los explorers finalizaron el Onboarding?:")
console.log(isFinished)