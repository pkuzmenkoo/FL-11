const MAX = 100;
const MIN = 0;
class Fighter {
	constructor(obj){
		this.win = 0;
		this.loss = 0;
		this._name = obj['name'];
		this._damage = obj['damage'];
		this._hp = obj['hp'];
		this._agility = obj['agility'];
	}
	getName() {
		return this._name;
	}
	getDamage() {
		return this._damage;
	}
	getAgility() {
		return this._agility;
	}
	getHealth() {
		return this._hp;
	}
	heal(heal) {
		this._hp = this.getHealth() + heal; 
		if(this._hp > MAX) {
			this._hp = MAX;
		}
		return this._hp;		
	}
	dealDamage(damage) {
		this._hp = this.getHealth() - damage; 
		if(this._hp < MIN) {
			this._hp = MIN;
		}
		return this._hp;
	}
	addWin() {
		this.win++
	}
	addLoss() {
		this.loss++
	}
	logCombatHistory() {
		return `Name: ${this.getName()}, Wins: ${this.win}, Losses: ${this.loss}`
	}
	attack(defender) {
		let successChance = MAX - defender.getAgility();
		let chance = Math.floor(Math.random() * MAX);
		if(successChance >= chance) {
			defender.dealDamage(this.getDamage());
			console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
		} else {
			console.log(`${this.getName()} attack missed`);
		}
	}
}
function battle(fighter1,fighter2) {
	if (fighter1.getHealth() === 0) {
		return `${fighter1.getName()} is dead and can't fight.`
	} else if (fighter2.getHealth() === 0) {
		return `${fighter2.getName()} is dead and can't fight.`
	} else {
		let isFirst = true;
		while(fighter1.getHealth() && fighter2.getHealth()) {
			if (isFirst) {
				fighter1.attack(fighter2);
				isFirst = false
			} else {
				fighter2.attack(fighter1);
				isFirst = true;
			}
		}
		if(fighter1.getHealth() === 0) {
			fighter2.addWin();
			fighter1.addLoss();
		} else {
			fighter2.addLoss();
			fighter1.addWin();
		}
	}
}
