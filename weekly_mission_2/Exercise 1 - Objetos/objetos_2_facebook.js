// Facebook: Objeto User and Biography
const user = {
  name: 'Luis Silva Martin',
  bio: 'Just a FrontEnd dev 💻',
  jobs: [
    'FrontEnd Developer en BBVAMX',
    'Service Desk en TCS'
  ],
  basic_info: {
    gender: 'Male',
    birthday: new Date("02/12/1998").toDateString(),
    interested: 'Women'
  },
  contact_info:{
    mobile: '7711887789',
    email: 'dev@example.com'
  },
  
  getBio: function() {
    return `${this.name} \nBio:\n  ${this.bio} \nJobs:\n  ${this.jobs[0]} \n  ${this.jobs[1]}`
  },
  getInfo: function(){
    return `${this.name} \nGender: ${this.basic_info.gender} \nBirthday: ${this.basic_info.birthday} \nInterested in: ${this.basic_info.interested} \nMobile Number: ${this.contact_info.mobile} \nEmail: ${this.contact_info.email}`
  }
}

console.log("Facebook User\n")
console.log(user.getBio() + "\n")
console.log(user.getInfo() + "\n")


const post = {
  user: user.name,
  date: new Date().toDateString(),
  text: 'Solamente mi amigo y yo jugando PlayStation como cuando teníamos 5 años',
  shared: 2,
  comments: 5,
  reactions: {
    '👍': 4,
    '💖': 2,
    '💞': 1,
    '😂': 0,
    '😮': 3,
    '😢': 0, 
    '😡': 0
  },

  getReactions: function() {
    let sorted = []
    for(let react in this.reactions)
      sorted.push([react, this.reactions[react]]) // Convierte el objeto en array
    sorted.sort((a, b) => b[1] - a[1]) // Ordena las reacciones de mayor a menor
    sorted.splice(3); // Obtiene los primeros 3
    sorted = sorted.map((str) => str[0]) // Se asignan los strings en un solo array
    sorted = sorted.join(" ")
    return sorted
  },

  getCount : function() {
    let count = []
    for (let react in this.reactions)
      count.push([react, this.reactions[react]]) // Convierte el objeto en array
    count = count.map((nmbr) => nmbr[1]) // Se asignan los números a un solo arrya
    const getTotal = count.reduce((acc, element) => acc + element, 0) // Se suman
    return getTotal
  },

  getPost: function () {
    return `${this.user} \n${this.date} \n${this.text} \n${this.getReactions()} ${this.getCount()}           ${this.comments} Comments • ${this.shared} Shares`
  }


}

console.log(post.getPost())
