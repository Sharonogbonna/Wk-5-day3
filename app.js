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
// class BadGuyFactory {
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

good randomizer - math.randomNumber(min, max) { return math.random()  (* max-min) + min*/
//#endregion

// Make an Alien Ship sub-class.
class AlienShip{
    constructor(name){
        this.name = name;
        this.hull = this.randomHull(3,6);
        this.firepower = this.randomFirepower(2, 4);
        this.accuracy = this.randomAccuracy();
    }
    randomHull(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    randomFirepower(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    randomAccuracy() {
        return (Math.floor(Math.random() * 3) + 6) / 10;
    }
};

//Make ship factory
class ShipFactory{
    constructor(){
        this.alienShipFleet = [];
    };
    makeAlienShip(name){
        const newAlienShip = new AlienShip(name);
        this.alienShipFleet.push(newAlienShip);
        }
    };
;
// Make the Human Ship sub-class.
class HumanShip{
    constructor(name){
        this.name = name;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
// Make a method for the USS Assembly that will attack a given target. The target can be an input to the method.
    attack(alien){
        //if this ship is still alive then attack
        console.log('this works')
        if(this.hull > 0){
            console.log(`I have this much ${this.hull} hull remaining`)
            //since it is not 100% accuracy, it will miss about 70-80% of the time
            if(Math.floor(Math.random() * 9)/10 <= this.accuracy){
                    alien.hull -= this.firepower
                    console.log(`You hit them! Alien has ${alien.hull} remaining.`)
                    
                }else{
                    console.log('You missed!')
                }
        }
    }
}



// Make an instance of each class
let player = new HumanShip('USS HelloWorld')
let alienShipFactory = new ShipFactory()
alienShipFactory.makeAlienShip('Enemy One')
player.attack(alienShipFactory.alienShipFleet[0])

// Simulate a battle between your ship and a single alien ship first.

// Make a method for the USS Assembly that will attack a given target. The target can be an input to the method.

// Run the method and pass it the alien ship.

// Make it so the method reduces the target's hull by the firepower of the USS Assembly.

// Make a game object

// Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.

// Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.

// Make a method for the alien ship to attack a target.

// At a status console log for the end of the round.

// PROBLEM: If you make the alien ship go kabloo-ey, then the alien should not then be able to attack you. Fix this.

// Make it so the attacks will keep occuring until someone's hull is at 0. Isolate what it is that you want to repeat.

// Make many alien ships with a Class. Make each object slightly different . . .

// hull between 3 and 6, firepower between 2 and 4, accuracy between 0.6 and 0.8.
// Make a loop that calls the Class and generates alien ships. Push those constructed objects into a predefined array. Start with 6 ships (the loop should run 6 times).

// Try out the game with the first alien ship in the array.

// Run the battle with all ships in turn.

// Move functions into the game object.

// Move on to the bonuses.*/