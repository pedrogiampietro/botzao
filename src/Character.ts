import robot from 'robotjs';
import { fromScreenshot, getPercentageColor } from './main';

interface ICharacter {
	percentageHealth: number;
	setPercentageHealth(): void;
	getPercentageHealth(): number;
}

class Character implements ICharacter {
	percentageHealth = 0;
	healingInterval: NodeJS.Timeout | null = null;

	setPercentageHealth() {
		const hp = fromScreenshot(1778, 158, 93, 10);
		this.percentageHealth = getPercentageColor(hp);
		console.log(`Calculated Health Percentage: ${this.percentageHealth}%`);
	}

	getPercentageHealth(): number {
		return this.percentageHealth;
	}

	healBelow(percentageHealthToHeal: number) {
		if (this.percentageHealth < percentageHealthToHeal) {
			console.log('f1');
			// robot.keyTap('f1');
		}
	}

	healing() {
		this.healingInterval = setInterval(() => {
			this.setPercentageHealth();
			this.healBelow(50);
		}, 250);
	}
}

const raszuje = new Character();
raszuje.healing();

export { ICharacter, Character };
