function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
};
function Driver (name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
};

function PickupLocation (address, city) {
  this.address = address;
  this.city = city;
};
    

// console.log(`The ${this.year} ${this.color} ${this.model} scooter is ready for pickup at ${this.address} in ${this.city} by ${this.name} who is ${this.age} with ${this.experience}.`);
// let scooterPickup = new Scooter('lauren', 'lauren@example.com');
// scooterPickup.pickupLocation().driver();