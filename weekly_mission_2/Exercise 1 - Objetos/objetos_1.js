// Objeto Repo

const repo = {
  name: "LaunchX",
  author: "dev-LuisSM",
  language: "Javascript",
  numberOfCommits: 98,
  stars: 50,
  forks: 10,
  issues_open: 10,
  issues_closed: 10,

  getTotalIssues: function () {
    return this.issues_open + this.issues_closed
  },

  getGeneralInfo: function () {
    return `This repository: ${this.name} was created by ${this.author}`
  }
}

console.log("OBJETO: REPO")
console.log(`Nombre del repo: ${repo.name}`)
console.log(`Issues totales: ${repo.getTotalIssues()}`)
console.log(`${repo.getGeneralInfo()}`)
console.log()

const dDate = new Date()
let today = `${dDate.getDate()}-${dDate.getMonth() + 1}-${dDate.getFullYear()}`
let ystdy = `${dDate.getDate() - 1}-${dDate.getMonth() + 1}-${dDate.getFullYear()}`

// Objeto Issue
const issue = {
  title: "Issue: Not showing info",
  repositoryNameAssociated: `${repo.name}`,
  status: "OPEN",
  numberOfComments: 3,
  labels: ["Info", "Javascript", "Website"],
  author: repo.author,
  dateCreated: ystdy,
  lastUpdated: today,

  getTitleAndAuthor: function () {
    return `${this.title} by ${this.author}`
  },

  getGeneralInfo: function () {
    return `This issue was created on ${this.dateCreated} by ${this.author}. \nIt's: ${this.status}`
  }
}
console.log("OBJETO: ISSUE")
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
console.log()

// Objeto PullRequest
const pullRequest = {
  title: "Pull Request: New feature created",
  branchName: "feature/new-screen",
  dateCreated: ystdy,
  status: "Pending",
  repositoryNameAssociated: `${repo.name}`,

  getStatus: function () {
    return `Status of the Pull Rrequest: ${this.status}`
  },

  getTitleAndAuthor: function () {
    return `${this.title} by ${repo.author} in ${this.repositoryNameAssociated}`
  }
}

console.log("OBJETO: PULL REQUEST")
console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())