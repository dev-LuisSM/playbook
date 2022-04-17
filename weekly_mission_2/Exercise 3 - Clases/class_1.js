// Class Repo
class repo {
  constructor(name, author, language) {
    this.name = name
    this.author = author
    this.language = language

    this.numberOfCommits = 98
    this.stars = 50
    this.forks = 10
    this.issues_open = 0
    this.issues_closed = 0
  }

  get getOpenIssues() {
    return this.issues_open
  }
  get getClosedIssues() {
    return this.issues_closed
  }

  set setOpenIssues(issues) {
    this.issues_open = issues
  }

  set setClosedIssues(issues) {
    this.issues_closed = issues
  }

  getTotalIssues() {
    return this.issues_open + this.issues_closed
  }

  getGeneralInfo() {
    return `This repository: ${this.name} was created by ${this.author}`
  }
}

console.log("CLASS: Repo")
const myRepo = new repo("LaunchX", "dev-LuisSM", "Javascript")
myRepo.setOpenIssues = 10
myRepo.setClosedIssues = 5

console.log(`Issues totales: ${myRepo.getTotalIssues()}`)
console.log(myRepo.getGeneralInfo())
console.log()

const dDate = new Date()
let today = `${dDate.getDate()}-${dDate.getMonth() + 1}-${dDate.getFullYear()}`
let ystdy = `${dDate.getDate() - 1}-${dDate.getMonth() + 1}-${dDate.getFullYear()}`

// Class Issue

class issue {
  constructor(title, repoNameAssoc, labels, author) {
    this.title = title
    this.repoNameAssoc = repoNameAssoc
    this.status = 'open'
    this.numberOfCommits = 0
    this.labels = labels
    this.author = author
    this.dateCreated = 0
    this.lastUpdated = 0
  }

  get setNumberCommits() {
    return this.numberOfCommits
  }

  get getDateCreated() {
    return this.dateCreated
  }

  get getlastUpdated() {
    return this.lastUpdated
  }

  set setNumberCommits(commit) {
    this.numberOfCommits = commit
  }

  set setDateCreated(date) {
    this.dateCreated = date
  }

  set setLastUpdated(date) {
    this.lastUpdated = date
  }

  getTitleAndAuthor() {
    return `${this.title} by ${this.author}`
  }

  getGeneralInfo() {
    return `This issue was created on ${this.dateCreated} by ${this.author}. \nIt's: ${this.status}`
  }
}

console.log("CLASS: Issue")
const myIssue = new issue("Issue: Not showing info", 
myRepo.name, ["Info", "Javascript"], myRepo.author)

myIssue.setDateCreated = ystdy
myIssue.lastUpdated = today
myIssue.setNumberCommits = 10
console.log(myIssue.getTitleAndAuthor())
console.log(myIssue.getGeneralInfo())
console.log()

// Class PullRequest

class pullRequest {
  constructor(title, author, repoNameAssoc, branchName, status) {
    this.title = title
    this.author = author
    this.repoNameAssoc = repoNameAssoc
    this.branchName = branchName
    this.dateCreated = 0
    this.status = status
  }

  get getDateCreated() {
    return this.dateCreated
  }
  set setDateCreated(date) {
    this.dateCreated = date
  }

  getStatus() {
    return `Status of the Pull Rrequest: ${this.status}`
  }

  getTitleAndAuthor() {
    return `${this.title} by ${this.author} in ${this.repoNameAssoc}`
  }
}

console.log("CLASS: Pull Request")
const myPR = new pullRequest("Pull Request: New feature created", 
myRepo.author, myRepo.name, "feature/new-screen", "Pending")

myPR.setDateCreated = ystdy
console.log(myPR.getStatus())
console.log(myPR.getTitleAndAuthor())