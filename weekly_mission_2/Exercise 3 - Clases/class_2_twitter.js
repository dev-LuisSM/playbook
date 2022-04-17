// Twitter: Class User

class user {
  constructor(user, username, age){
    this.user = user
    this.username = username
    this.age = age

    this.bio = ""
    this.joined = 0
    this.birthday = 0
    this.following = 0
    this.followers = 0
  }

  get getBio() { 
    return this.bio 
  }
  
  get getJoin() {
    return this.joined
  }
  
  get getBirthday() {
    return this.birthday
  }
  
  get getFollowers() {
    return this.followers
  }

  get getFollowing() {
    return this.following
  }

  set setBio(bio) {
    this.bio = bio
  }

  set setJoin(join) {
    this.joined = join
  }

  set setBirthday(birthday) {
    this.birthday = birthday
  }

  set setFollowers(followers) {
    this.followers = followers
  }

  set setFollowing(following) {
    this.following = following
  }

  showAllInfo() {
    return `${this.user} \n${this.username} \n${this.bio} \n🎈${this.birthday} \n🗓  ${this.joined} \n${this.following} Following | ${this.followers} Followers`
  }
}

console.log("Twitter User")
const myUser = new user("LuisSM", "@devLuisSM", 23)
myUser.setBio = "Frontend developer 🖥 \nIntento de UX/UI Designer🎨 \nCatador profesional de agua de mazapán🥜"
myUser.setBirthday = new Date("02/12/98").toDateString()
myUser.setJoin = new Date("10/12/12").toDateString()
myUser.setFollowers = 20
myUser.setFollowing = 150
console.log(myUser.showAllInfo())
console.log()

// Twitter : Class Trending Topic

class trending_topic {
  constructor(country){
    this.country = country
    this.title = ""
    this.description = ""
    this.tweets = 0
  }

  get getTitle(){
    return this.title
  }

  get getDescription(){
    return this.description
  }

  get getTweets(){
    return this.tweets
  }

  set setTitle(title){
    this.title = title
  }

  set setDescription(description){
    this.description = description
  }

  set setTweets(tweets){
    this.tweets = tweets
  }

  getCountry() {
    return `${this.country} TRENDS`
  }

  getTrendingTopic() {
    return `${this.getCountry()} \n#${this.title} \n${this.description} \n${this.tweets}K Tweets`
  }
}

console.log("Twitter Trending Topics")

const arte = new trending_topic("MX")
arte.setTitle = "DìaMundialDelArte"
arte.setDescription = "Este 15 de abril se conmemora el Dìa Mundial del Arte 🖼 🎵 🎭"
arte.setTweets = 16.3
console.log(arte.getTrendingTopic())
console.log()

const dumble = new trending_topic("MX")
dumble.setTitle = "Dumbledore"
dumble.setDescription = "🎥 'Animales fantásticos: los secretos de Dumbledore' llega a cines"
dumble.setTweets = 30.9
console.log(dumble.getTrendingTopic())
console.log()

// Twitter : Class Hashtag
class hashtag {
  constructor(hashtagName){
    this.hashtagName = hashtagName
    this.post = ""
    this.user = ""
    this.username = ""
    this.hoursAgo = 0
  }

  get getPost(){
    return this.post
  }

  get getUser(){
    return this.user
  }

  get getUserName(){
    return this.username
  }

  get getHourAgo(){
    return this.hoursAgo
  }

  set setPost(post){
    this.post = post
  }

  set setUser(user){
    this.user = user
  }

  set setUserName(username){
    this.username = username
  }

  set setHourAgo(hoursAgo){
    this.hoursAgo = hoursAgo
  }

  postWithHashtag() {
    return `${this.user} ${this.username} • ${this.hoursAgo}h \n${this.post} #${this.hashtagName}`
  }
}

// Twitter : Class Hashtag
console.log("Twitter Hashtag")
const myHashtag = new hashtag(dumble.title)
myHashtag.setPost = "Rewatching the movie with friends is an even more unique experience! LET'S GOOOO! ✨"
myHashtag.setUser = "Michaela"
myHashtag.setUserName = "@Michaela134"
myHashtag.hoursAgo = 12
console.log(myHashtag.postWithHashtag())