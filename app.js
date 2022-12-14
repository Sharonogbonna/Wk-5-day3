/////Declaring HTML stuff
let playerStats = document.querySelector(".playerStats");
let enemyStats = document.querySelector(".enemyStats");
let nameBoxPlayer = document.querySelector(".nameBox-player");
let nameBoxEnemy = document.querySelector(".nameBox-enemy");
const trigger = document.querySelector(".trigger");

////declare stuff for the game
let numberOfEnemyShips = Math.floor(Math.random() * 15);

const game = {
  createEnemyShips(num) {
    for (let i = 1; i <= num; i++) {
      alienShipFactory.makeAlienShip(`Enemy ${i}`);
    }
    console.log(`The enemy deployed ${num} ships!`);
  },

  // Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.
  initiateGame() {
    player.attack(alienShipFactory.alienShipFleet[0]);
  },
};

// Make an Alien Ship sub-class.
class AlienShip {
  constructor(name) {
    this.name = name;
    this.hull = this.randomHull(4, 13);
    this.firepower = this.randomFirepower(2, 4);
    this.accuracy = this.randomAccuracy();
  }
  randomHull(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  randomFirepower(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  randomAccuracy() {
    return (Math.floor(Math.random() * 3) + 6) / 10;
  }
  updateStats(stats) {
    nameBoxEnemy.innerText = `${this.name}`;
    stats.innerText = `Hull: ${this.hull}
    Fire Power: ${this.firepower}
    Accuracy: ${this.accuracy * 100}%`;
  }
  attack(human) {
    //if this ship is still alive then attack
    if (this.hull > 0) {
      console.log(`${this.name} is attacking.`);
      //since it is not 100% accuracy, it will miss about 70-80% of the time
      if (Math.floor(Math.random() * 9) / 10 <= this.accuracy) {
        human.hull -= this.firepower;
        console.log(`You've been hit! You have ${human.hull} life remaining.`);
        //remove alien from array when they are attacked
        if (human.hull <= 0) {
          console.log(`You are Dead. GAME OVER`);
        } else {
          human.attack(this);
        }
      } else {
        console.log(`${this.name} missed!`);
        if (human.hull > 0) {
          human.attack(this);
        }
      }
    }
  }
}

//Make ship factory
class ShipFactory {
  constructor() {
    this.alienShipFleet = [];
    this.originalAlienFleet = [];
  }
  makeAlienShip(name) {
    const newAlienShip = new AlienShip(name);
    this.alienShipFleet.push(newAlienShip);
    this.originalAlienFleet.push(newAlienShip);
  }
  createAlienStatusUpdate() {
    console.log(`There were ${numberOfEnemyShips} enemy ships deployed`);
    const alienStatusArr = [];
    for (let i = 0; i < alienShipFactory.originalAlienFleet.length; i++) {
      if (alienShipFactory.originalAlienFleet[i].hull <= 0) {
        alienStatusArr.push(
          `${alienShipFactory.originalAlienFleet[i].name} went kabloo-ey`
        );
      } else {
        alienStatusArr.push(
          `${alienShipFactory.originalAlienFleet[i].name} has ${alienShipFactory.originalAlienFleet[i].hull} hull`
        );
      }
    }
    return alienStatusArr;
  }
}
let alienShipFactory = new ShipFactory();
game.createEnemyShips(numberOfEnemyShips);

// Make the Human Ship sub-class.
class HumanShip {
  constructor(name) {
    this.name = name;
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
  updateStats(stats) {
    nameBoxPlayer.innerText = `${this.name}`;
    stats.innerText = `Hull: ${this.hull}
    Fire Power: ${this.firepower}
    Accuracy: ${this.accuracy * 100}%`;
  }
  retreat() {
    console.log("Game Over, You lost!");
  }
  attack(alien) {
    //if this ship is still alive then attack
    if (this.hull > 0) {
      console.log(`You are attacking ${alien.name}`);
      //since it is not 100% accuracy, it will miss about 70-80% of the time
      if (Math.floor(Math.random() * 9) / 10 <= this.accuracy) {
        alien.hull -= this.firepower;
        alienShipFactory.originalAlienFleet[0].hull -= this.firepower;
        alienShipFactory.originalAlienFleet.push(
          alienShipFactory.originalAlienFleet[0]
        );
        alienShipFactory.originalAlienFleet.shift();
        console.log(
          `You hit them! ${alien.name} has ${alien.hull} life remaining.`
        );
        //remove alien from array when they are attacked
        if (alien.hull <= 0) {
          console.log(`Congratulations you killed ${alien.name}`);
          console.log(alienShipFactory.createAlienStatusUpdate());
          alienShipFactory.alienShipFleet.shift();
          alienShipFactory.alienShipFleet[0].updateStats(enemyStats);
          if (alienShipFactory.alienShipFleet.length === 0) {
            console.log("YOU WON!!");
          } else {
            console.log(
              `You have ${alienShipFactory.alienShipFleet.length} enemies remaining`
            );

            if (
              confirm(
                `You have ${this.hull} hull. Do you want to attack the next alien? Press OK to ATTACK or cancel to RETREAT`
              )
            ) {
              console.log("You chose to attack again");
              this.attack(alienShipFactory.alienShipFleet[0]);
            } else {
              return this.retreat();
            }
          }
        } else {
          alien.attack(this);
        }
      } else {
        if (
          confirm("You missed! Too bad so sad. Are you ready to be attacked?")
        ) {
          if (alien.hull > 0) {
            alien.attack(this);
          }
        } else {
          this.retreat();
        }
      }
    }
  }
}
let player = new HumanShip("USS HelloWorld");
player.updateStats(playerStats);

trigger.addEventListener("click", game.initiateGame);
