const fighters = [
    {
        name: 'Dog',
        attack: 5,
        health: 20,
        armor: 2
    },
    {
        name: 'Cat',
        attack: 4,
        health: 30,
        armor: 1
    },
    {
        name: 'Fox',
        attack: 4,
        health: 25,
        armor: 2
    },
    {
        name: 'Wolf',
        attack: 7,
        health: 15,
        armor: 2
    },
    {
        name: 'Rabbit',
        attack: 3,
        health: 50,
        armor: 1
    }
]
class Display {
    constructor(fighters) {
        this.fighters = fighters;
        this.startBtn = document.querySelector('.start');
        this.fightBtn = document.querySelector('.fight');
        this.list = document.querySelector('.characters-list')
        fighters.forEach((e, index) => {
            const fighterBtn = document.createElement('button')
            fighterBtn.append(e.name);
            fighterBtn.id = `id${index}`;
            this.list.append(fighterBtn);
        });

        this.battleField = document.querySelector('.battle-field');
        this.leftBattleField = document.createElement('div');
        this.rightBattleField = document.createElement('div');
        this.battleField.append(this.leftBattleField)
        this.battleField.append(this.rightBattleField)
    }

    lookForButtons(game) {
        this.startBtn.addEventListener('click', () => {
            game.onStartClick();
            alert('Choose your fighter');
            this.list.classList.add('view')
        });
        
        this.fighters.forEach((element, i) => {
            document.querySelector(`#id${i}`).addEventListener('click', () => {
                game.onChoose(i);
                this.fightBtn.classList.add('nohiden')
                this.list.remove('nohiden')
            });
        });

        this.fightBtn.addEventListener('click', () => game.onFightClick());
    }

    updateUnitsView(fisrtUnit, secondUnit) {
        this.leftBattleField.innerHTML = `${fisrtUnit.name}: ${fisrtUnit.health} HP`;
        this.rightBattleField.innerHTML = `${secondUnit.name}: ${secondUnit.health} HP`;

    }
}

class Unit {

    constructor(fight) {
        this.name = fight.name;
        this.health = fight.health;
        this.attack = fight.attack;
        this.armor = fight.armor;

        console.log(this);
    }
    receiveAttack(damage) {
        this.health -= damage - this.armor;
    }
}

class Game {
    constructor(fighters, display) {
        this.fighters = fighters;
        this.display = display;

        display.lookForButtons(this);
    }

    onStartClick() {
        console.log('onStartClick')
    }

    onChoose(index) {
        this.firstUnit = new Unit(this.fighters[index]);
        const secondUnitId = Math.floor(Math.random() * this.fighters.length);
        this.secondUnit = new Unit(this.fighters[secondUnitId]);

        this.display.updateUnitsView(this.firstUnit, this.secondUnit);
    }

    onFightClick() {
        this.round();

        this.display.updateUnitsView(this.firstUnit, this.secondUnit);
    }

    round() {
        this.firstUnit.receiveAttack(this.secondUnit.attack);
        this.secondUnit.receiveAttack(this.firstUnit.attack);

        if (this.firstUnit.health <= 0 || this.secondUnit.health <= 0) {
            alert(`${this.firstUnit.health > this.secondUnit.health ? this.firstUnit.name : this.secondUnit.name} win`);
            location.reload();
        }
    }
}

const display = new Display(fighters);
const game = new Game(fighters, display);



