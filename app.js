//#region EXAMPLE CODE
// class BadGuy {
//     constructor(type, damage, health, attackShout) {
//       this.type = type;
//       this.damage = damage;
//       this.health = health;
//       this.attackShout = attackShout;
//     }
//     shout() {
//       console.log(`${this.type} says: ${this.attackShout}`);
//     }
//   }
//   class BadGuyFactory {
//     constructor(factoryType) {
//       this.factoryType = factoryType;
//       this.badGuyCollection = [];
//     }
  
//     makeNewBadGuy(damage, health, attackShout) {
//       const newBadGuy = new BadGuy(this.factoryType, damage, health, attackShout);
//       this.badGuyCollection.push(newBadGuy);
//     }
  
//     printBadGuys() {
//       for (let badGuy of this.badGuyCollection) {
//         console.log(badGuy);
//       }
//     }
//   }
//   class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   let myCar = new Model("Ford", "Mustang");
//   document.getElementById("demo").innerHTML = myCar.show();
//   The super() method refers to the parent class.
//   By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
//#endregion

//#region Pseudocode
/* 
FOR MAKING SHIPS
Make class for human Ship
make class for alien ship
make Factory for ships
for each class have a function that determines the shot of accuracy 
make a function for everytime you get hit your hull decreases
each ship needs an attack method that is bound to maybe a click function

good randomizer - math.randomNumber(min, max) { return math.random()  (* max-min) + min

//#region Ship Class
class Ship{
 constructor(type, hull, firepower, accuracy){
    this.type = type
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
 };    
};
//#endregion
