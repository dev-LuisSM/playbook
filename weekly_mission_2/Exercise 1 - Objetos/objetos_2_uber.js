// Uber: Objeto User and Travel

const user  = {
  firstName: 'Luis Eduardo',
  lastName: 'Silva Martin',
  phone: '7711887789',
  email: 'luis@example.com',
  password: '**********',
  accounts_connected: {
    google: true,
    facebook: false
  },

  getPublicInfo: function() {
    return `First Name: ${this.firstName} \nLast Name: ${this.lastName} \nEmail: ${this.email} \nPhone ${this.phone}`
  },
  getProfileInfo: function() {
    return `PUBLIC INFO: \n${this.getPublicInfo()} \nPRIVATE INFO:\nPassword: ${this.password} \nConnected with Google: ${this.accounts_connected.google} \nConnected with Facebook: ${this.accounts_connected.facebook}`
  }
}

console.log("Uber User\n")
console.log(user.getProfileInfo())

const travel = {
  passenger:{
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone
  },
  driver:{
    firstName: 'José',
    lastName: 'Mejia Robles',
    phone: '5588339901',
    car: { 
      make: 'Nissan',
      model: 'Versa',
      plate: 'AVC-534-M',
      color: 'Gray'
    }
  },
  ride: {
    date: new Date().toDateString(),
    from: 'Av. Zeus 430 Col. Chacon',
    to: 'Col. Centro',
    price: 70,
    time: 30
  },

  getPassengerInfo: function () {
    return `Passenger: ${this.passenger.firstName} ${this.passenger.lastName} \nPhone: ${this.passenger.phone}`
  },

  getDiverInfo: function () {
    return `Driver: ${this.driver.firstName} ${this.driver.lastName} \nPhone: ${this.driver.phone}`
  },

  getCarInfo: function () {
    return `Car: ${this.driver.car.make} ${this.driver.car.model} \nPlates: ${this.driver.car.plate} \nColor: ${this.driver.car.color}`
  },

  getRideInfo: function () {
    return `${this.ride.date} \nFrom: ${this.ride.from} to ${this.ride.to} \nPrice: ${this.ride.price} \nEstimate Time: ${this.ride.time}`
  },

  printRideInfo: function () {
    return `${this.getPassengerInfo()} \n${this.getDiverInfo()} \n${this.getCarInfo()} \n${this.getRideInfo()}`
  }
}
console.log("\nTravel Object\n")
console.log(travel.printRideInfo())