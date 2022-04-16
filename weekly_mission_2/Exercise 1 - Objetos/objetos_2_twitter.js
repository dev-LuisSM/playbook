// Twitter: Objeto User
const user = {
  user: "LuisSM",
  username: "@devLuisSM",
  bio: "Frontend developer 🖥 \nIntento de UX/UI Designer🎨 \nCatador profesional de agua de mazapán🥜",
  age: 23,
  joined: new Date("10/12/12").toDateString(),
  birthday: new Date("02/12/98").toDateString(),
  following: 150,
  followers: 20,
  
  showAllInfo: function () {
    return `${this.user} \n${this.username} \n${this.bio} \n🎈${this.birthday} \n🗓  ${this.joined} \n${this.following} Following | ${this.followers} Followers`
  }
}
console.log("Twitter User\n")
console.log(user.showAllInfo() + '\n')

// Twitter : Objeto Trending Topic
const trending_topic = {
  country: "MEXICO",
  hashtags: {
    1: {
      title: "DìaMundialDelArte",
      desc: "Este 15 de abril se conmemora el Dìa Mundial del Arte 🖼 🎵 🎭",
      tweets: "16.3K Tweets"
    },
    2: {
      title: "Dumbledore",
      desc: "🎥 'Animales fantásticos: los secretos de Dumbledore' llega a cines",
      tweets: "30.9K Tweets"
    },
    3: {
      title: "ViernesSanto",
      desc: "El Viernes Santo es el día en el que la gente de religión cristiana recuerda la muerte de Jesús",
      tweets: "56K Tweets"
    }
  },

  getCountry: function () {
    return `${this.country} TRENDS`
  },

  getTrendingTopic: function (number) {
    return `#${this.hashtags[number].title} \n${this.hashtags[number].desc} \n${this.hashtags[number].tweets}`
  }
}

console.log(trending_topic.getCountry() + '\n')
console.log(trending_topic.getTrendingTopic(1) + '\n')
console.log(trending_topic.getTrendingTopic(2) + '\n')

// Twitter : Objeto Hashtag
const hashtag = {
  hashtag: `${trending_topic.hashtags[2].title}`,
  post: `Rewatching the movie with friends is an even more unique experience! LET'S GOOOO! ✨`,
  user: `Michaela`,
  username: `@Michaela134`,
  hoursAgo: 12,

  postWithHashtag: function () {
    return `${this.user} ${this.username} • ${this.hoursAgo}h \n${this.post} #${this.hashtag}`
  }
}

console.log(hashtag.postWithHashtag())