// Uber: class user

class user {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.phone = ''
    this.email = ''
    this.password = '**********'
    this.accounts_connected = {
      google: false,
      facebook: false
    }
  }

  get getPhone() {
    return this.phone
  }

  get getEmail() {
    return this.email
  }

  get getGoogle() {
    return this.accounts_connected.google
  }

  get getFacebook() {
    return this.accounts_connected.facebook
  }

  set setPhone(phone) {
    this.phone = phone
  }

  set setEmail(email) {
    this.email = email
  }

  set setGoogle(google) {
    this.accounts_connected.google = google
  }

  set setFacebook(facebook) {
    this.accounts_connected.facebook = facebook
  }

  getPublicInfo() {
    return `First Name: ${this.firstName} \nLast Name: ${this.lastName} \nEmail: ${this.email} \nPhone ${this.phone}`
  }

  getProfileInfo() {
    return `PUBLIC INFO: \n${this.getPublicInfo()} \nPRIVATE INFO:\nPassword: ${this.password} \nConnected with Google: ${this.accounts_connected.google} \nConnected with Facebook: ${this.accounts_connected.facebook}`
  }
}

console.log("Uber user")
const myUser = new user('Luis Eduardo', 'Silva Martin')
myUser.setPhone = '7711887789'
myUser.setEmail = 'dev@example.com'
myUser.setGoogle = true
console.log(myUser.getProfileInfo())
console.log()

class travel {
  constructor(name, lastName, phone) {
    this.name = name
    this.lastName = lastName
    this.phone = phone
    this.driver = {
      firstName: '',
      lastName: '',
      phone: '',
      car: {
        make: '',
        model: '',
        plate: '',
        color: ''
      }
    }
    this.ride = {
      date: '',
      from: '',
      to: '',
      price: 0,
      time: 0
    }
  }

  get getDriverName() { return this.driver.firstName }
  get getDriverLast() { return this.driver.lastName }
  get getDriverPhone() { return this.driver.phone }

  get getMake() { return this.driver.car.make }
  get getModel() { return this.driver.car.model }
  get getPlates() { return this.driver.car.plate }
  get getColor() { return this.driver.car.color }

  get getDate() { return this.ride.date }
  get getFrom() { return this.ride.from }
  get getTo() { return this.ride.to }
  get getPrice() { return this.ride.price }
  get getTime() { return this.ride.time }

  set setDriverName(name) { this.driver.firstName = name }
  set setDriverLast(last) { this.driver.lastName = last }
  set setDriverPhone(phone) { this.driver.phone = phone }

  set setMake(make) { this.driver.car.make = make }
  set setModel(model) { this.driver.car.model = model }
  set setPlates(plates) { this.driver.car.plate = plates }
  set setColor(color) { this.driver.car.color = color }

  set setDate(date) { this.ride.date = date }
  set setFrom(from) { this.ride.from = from }
  set setTo(to) { this.ride.to = to }
  set setPrice(price) { this.ride.price = price }
  set setTime(time) { this.ride.time = time }

  passegerInfo(){
    return `Passenger: ${this.name} ${this.lastName} \nPhone: ${this.phone}`
  }

  driverInfo() { 
    return `Driver: ${this.driver.firstName} ${this.driver.lastName} \nPhone: ${this.driver.phone}`
  }

  carInfo() {
    return `Car: ${this.driver.car.make} ${this.driver.car.model} \nPlates: ${this.driver.car.plate} \nColor: ${this.driver.car.color}`
  }

  rideInfo() { 
    return `${this.ride.date} \nFrom: ${this.ride.from} to ${this.ride.to} \nPrice: ${this.ride.price}MXN \nEstimate Time: ${this.ride.time}min`
  }

  printInfo() { 
    return `${this.passegerInfo()} \n${this.driverInfo()} \n${this.carInfo()} \n${this.rideInfo()}`
  }
}

console.log("Travel:")
const myTravel = new travel(myUser.firstName, myUser.lastName, myUser.phone)
myTravel.setDriverName = 'José'
myTravel.setDriverLast = 'Mejia Robles'
myTravel.setDriverPhone = '5588339901'

myTravel.setMake = 'Nissan'
myTravel.setModel = 'Versa'
myTravel.setPlates = 'AVC-534-M'
myTravel.setColor = 'Gray'

myTravel.setDate = new Date().toDateString()
myTravel.setFrom = 'Av. Zeus 430 Col. Chacon'
myTravel.setTo = 'Col. Centro'
myTravel.setPrice = 70
myTravel.setTime = 30
console.log(myTravel.printInfo())
