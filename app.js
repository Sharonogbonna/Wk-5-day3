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
    attack(human){
        //if this ship is still alive then attack
        if(this.hull > 0){
            console.log(`${this.name} is attacking.`)
            //since it is not 100% accuracy, it will miss about 70-80% of the time
            if(Math.floor(Math.random() * 9)/10 <= this.accuracy){
                    human.hull -= this.firepower
                    console.log(`You've been hit! You have ${human.hull} life remaining.`)
                    //remove alien from array when they are attacked
                    if(human.hull <= 0){
                        console.log(`You are Dead. GAME OVER`)
                    }else{
                        human.attack(this)
                    }
                }else{
                    console.log(`${this.name} missed!`)
                    if(human.hull > 0){
                        human.attack(this)}
                }
        }
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
    retreat(){
        console.log('Game Over, You lost!')
    }
    attack(alien){
        //if this ship is still alive then attack
        if(this.hull > 0){
            console.log(`You are attacking and have ${this.hull} life remaining`)
            //since it is not 100% accuracy, it will miss about 70-80% of the time
            if(Math.floor(Math.random() * 9)/10 <= this.accuracy){
                    alien.hull -= this.firepower
                    console.log(`You hit them! ${alien.name} has ${alien.hull} life remaining.`)
                    //remove alien from array when they are attacked
                    if(alien.hull <= 0){
                        console.log(`Congratulations you killed ${alien.name}`)
                        alienShipFactory.alienShipFleet.shift()
                        if(alienShipFactory.alienShipFleet.length === 0){
                            console.log('YOU WON!!')
                        }else{
                            ///give player the option to attack the next alien
                            //based on their response that is how you move
                            //options: alert, modal, user input
                            //function myFunction() {
                            console.log(`You have ${alienShipFactory.alienShipFleet.length} enemies remaining`)    
                            //gives player an option to retreat or keep fighting
                            if(confirm(`You have ${this.hull} hull. Do you want to attack the next alien? Press OK to ATTACK or cancel to RETREAT`)){
                                    console.log('You chose to attack again')
                                    this.attack(alienShipFactory.alienShipFleet[0])
                                }else{
                                    return this.retreat()
                                }
                             // }
                            
                            
                        }
                    }else{
                       alien.attack(this) 
                    }
                }else{
                    console.log('You missed!')
                    if(alien.hull > 0){
                        alien.attack(this)
                    }
                }
        }
    }
}



// Make an instance of each class
let player = new HumanShip('USS HelloWorld')
let alienShipFactory = new ShipFactory()
alienShipFactory.makeAlienShip('Enemy One')
alienShipFactory.makeAlienShip('Enemy Two')
alienShipFactory.makeAlienShip('Enemy Three')
alienShipFactory.makeAlienShip('Enemy Four')
alienShipFactory.makeAlienShip('Enemy Five')
alienShipFactory.makeAlienShip('Enemy Six')

//console.log(alienShipFactory.alienShipFleet)
//alienShipFactory.alienShipFleet[0].attack(player)
//testing auto attack
//alienShipFactory.alienShipFleet[0].hull = 10
//player.attack(alienShipFactory.alienShipFleet[0])


// Simulate a battle between your ship and a single alien ship first.


// Run the method and pass it the alien ship.

// Make it so the method reduces the target's hull by the firepower of the USS Assembly.

// Make a game object
const game = {
// Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.
  alienStatusUpdate() {
    console.log(`There are ${alienShipFactory.alienShipFleet.length} enemies remaining`)
    let alienStatusArr = []
    for(let i = 0 ; i < alienShipFactory.alienShipFleet.length; i++){
        if(alienShipFactory.alienShipFleet[i].hull == 0){
            alienStatusArr.push(`${alienShipFactory.alienShipFleet[i].name} went kabloo-ey`);
        }else{
         alienStatusArr.push(`${alienShipFactory.alienShipFleet[i].name} has ${alienShipFactory.alienShipFleet[i].hull} hull remaining`)
        }
    }return alienStatusArr
  }  
}
console.log(game.alienStatusUpdate())



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

// const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
// const closeButton = document.querySelector(".close-button");

// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }
function initiateGame() {
    player.attack(alienShipFactory.alienShipFleet[0]);
}
trigger.addEventListener("click", initiateGame);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);
// function myFunction() {
//     confirm("Press a button!");
//   }

/////Attempting to 