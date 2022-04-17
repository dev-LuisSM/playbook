// Facebook: Class User w/Bio
class job {
  constructor(job) {
    this.job = job;
  }
}

class user extends job {
  constructor(name, gender, mobile, email, job) {
    super(job)
    this.name = name
    this.gender = gender
    this.bio = ""
    this.birthday = ""
    this.interested = ""

    this.mobile = mobile
    this.email = email
  }

  get getBirthday() {
    return this.birthday
  }

  get getInterest() {
    return this.interest
  }

  get getBio() {
    return this.bio
  }

  set setBirthday(birthday) {
    this.birthday = birthday
  }

  set setInterest(interest) {
    this.interest = interest
  }

  set setBio(bio) {
    this.bio = bio
  }

  getBio() {
    return `${this.name} \nBio:\n  ${this.bio} \nJobs:\n  ${this.job}`
  }

  getInfo() {
    return `${this.name} \nGender: ${this.gender} \nBirthday: ${this.birthday} \nInterested in: ${this.interested} \nMobile Number: ${this.mobile} \nEmail: ${this.email}`
  }
}

console.log("Facebook User")
const myUser = new user("Luis Silva Martin", "Male", "7711887789", "dev@gmail.com", "FrontEnd Dev en BBVA MX")
myUser.setBio = "Just a FrontEnd dev 💻"
myUser.setInterest = "Female"
myUser.setBirthday = new Date("02/12/98").toDateString()
console.log("My bio:")
console.log(myUser.getBio() + '\n')
console.log("My info:")
console.log(myUser.getInfo() + '\n')

// Facebook : Class Post

class post  {
  constructor(user) {
    this.user = user
    this.date = ""
    this.text = ""
    this.shared = 0
    this.comments = 0
    this.reactions = {
      '👍': 0,
      '💖': 0,
      '💞': 0,
      '😂': 0,
      '😮': 0,
      '😢': 0,
      '😡': 0
    }
  }

  get getDate() { return this.date }
  get getText() { return this.text }
  get getShare() { return this.share }
  get getComments() { return this.comments }
  get getLike() { return this.reactions["👍"] }
  get getLove() { return this.reactions["💖"] }
  get getCare() { return this.reactions["💞"] }
  get getHaha() { return this.reactions["😂"] }
  get getWow() { return this.reactions["😮"] }
  get getSad() { return this.reactions["😢"] }
  get getAngry() { return this.reactions["😡"] }

  set setDate(date) { this.date = date}
  set setText(text) { this.text = text}
  set setShare(share) {this.shared = share}
  set setComments(comments) {this.comments = comments}
  set setLike(reaction) { this.reactions["👍"] = reaction }
  set setLove(reaction) { this.reactions["💖"] = reaction }
  set setCare(reaction) { this.reactions["💞"] = reaction }
  set setHaha(reaction) { this.reactions["😂"] = reaction }
  set setWow(reaction) { this.reactions["😮"] = reaction }
  set setSad(reaction) { this.reactions["😢"] = reaction }
  set setAngry(reaction) { this.reactions["😡"] = reaction }

  getReactions() { 
    let sorted = []
    for (let react in this.reactions)
      sorted.push([react, this.reactions[react]]) 
    sorted.sort((a, b) => b[1] - a[1])
    sorted.splice(3)
    sorted = sorted.map((str) => str[0]) 
    sorted = sorted.join(" ")
    return sorted
  }

  getTotalCount() {
    let count = []
    for (let react in this.reactions)
      count.push([react, this.reactions[react]]) 
    count = count.map((nmbr) => nmbr[1]) 
    const getTotal = count.reduce((acc, element) => acc + element, 0)
    return getTotal
  }

  getPost(){ 
    return `${this.user} \n${this.date} \n${this.text} \n${this.getReactions()} ${this.getTotalCount()}           ${this.comments} Comments • ${this.shared} Shares`
  }
}

console.log("Facebook Post")
const myPost = new post(myUser.name)
myPost.setDate = new Date().toDateString()
myPost.setText = "Solamente mi amigo y yo jugando PlayStation como cuando teníamos 5 años"
myPost.setShare = 3
myPost.setComments = 5
myPost.setLike = 2
myPost.setLove = 4
myPost.setCare = 0
myPost.setHaha = 0
myPost.setSad = 0
myPost.setAngry = 1

console.log(myPost.getPost())
