"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const robotjs_1 = __importDefault(require("robotjs"));
const main_1 = require("./main");
class Character {
    percentageHealth = 0;
    healingInterval = null;
    setPercentageHealth() {
        const hp = (0, main_1.fromScreenshot)(1527, 67, 93, 10);
        this.percentageHealth = (0, main_1.getPercentageColor)(hp);
    }
    getPercentageHealth() {
        return this.percentageHealth;
    }
    healBelow(percentageHealthToHeal) {
        if (this.percentageHealth < percentageHealthToHeal) {
            robotjs_1.default.keyTap('f6');
        }
    }
    healing() {
        this.healingInterval = setInterval(() => {
            this.setPercentageHealth();
            this.healBelow(50);
        }, 250);
    }
}
exports.Character = Character;
const raszuje = new Character();
raszuje.healing();
//# sourceMappingURL=Character.js.map