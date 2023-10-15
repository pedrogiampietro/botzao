"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const robotjs_1 = __importDefault(require("robotjs"));
var Directions;
(function (Directions) {
    Directions["up"] = "up";
    Directions["down"] = "down";
    Directions["left"] = "left";
    Directions["right"] = "right";
})(Directions || (Directions = {}));
function getRandomNumberBetween(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
function getRandomDirections() {
    const directions = [Directions.up, Directions.down, Directions.left, Directions.right], firstPosition = getRandomNumberBetween(0, directions.length - 1), firstDirection = directions[firstPosition];
    directions.splice(firstPosition, 1);
    const secondDirection = directions[getRandomNumberBetween(0, directions.length - 1)];
    return [firstDirection, secondDirection];
}
class AntiIdle {
    antiIdleInterval = null;
    start() {
        const randomize = () => {
            const timeout = getRandomNumberBetween(10 * 60 * 1000, 15 * 60 * 1000), directions = getRandomDirections();
            this.idleTurn(directions[0], directions[1]);
            clearInterval(this.antiIdleInterval);
            this.antiIdleInterval = setInterval(randomize, timeout);
        };
        this.antiIdleInterval = setInterval(randomize, 500);
    }
    ;
    stop() {
        clearInterval(this.antiIdleInterval);
    }
    ;
    idleTurn(firstDirection, secondDirection) {
        robotjs_1.default.keyTap(firstDirection, 'control');
        robotjs_1.default.setKeyboardDelay(getRandomNumberBetween(0, 25));
        robotjs_1.default.keyTap(secondDirection, 'control');
        robotjs_1.default.setKeyboardDelay(getRandomNumberBetween(0, 25));
        robotjs_1.default.keyTap(firstDirection, 'control');
    }
    ;
}
const afk = new AntiIdle();
afk.start();
//# sourceMappingURL=idle.js.map