// Clases y Objetos
// Ejemplo 5 : Atributos con valores por default

class PullRequest {
    constructor(repo, title, lines_changed) {
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = "OPEN"
        this.dateCreated = new Date()
    }

    getInfo (){
        return `This PR in the repo: ${this.repo} is (status ${this.status}) and was created on ${this.dateCreated}`
    }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myFirstPR = new PullRequest("LaunchX", "Mi primer PR", 105)
console.log("First PR: ", myFirstPR.getInfo())

const mySecondPR = new PullRequest("LaunchX", "Mi segundo PR", 50)
console.log("Second PR: ", mySecondPR.getInfo())