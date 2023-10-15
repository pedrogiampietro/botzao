"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFromPng = exports.ImageFromScreenshot = void 0;
const main_1 = require("./main");
class ImageFromScreenshot {
    width;
    height;
    screen;
    constructor(screen) {
        this.width = screen.width;
        this.height = screen.height;
        this.screen = screen;
    }
    colorAt(x, y) {
        const colorString = this.screen.colorAt(x, y);
        return main_1.Color.fromString(colorString);
    }
}
exports.ImageFromScreenshot = ImageFromScreenshot;
class ImageFromPng {
    width;
    height;
    png;
    constructor(png) {
        this.width = png.width;
        this.height = png.height;
        this.png = png;
    }
    colorAt(col, row) {
        const colorSize = 4;
        const startIndex = row * this.width * colorSize + col * colorSize;
        const red = this.png.data[startIndex];
        const green = this.png.data[startIndex + 1];
        const blue = this.png.data[startIndex + 2];
        return new main_1.Color(red, green, blue);
    }
}
exports.ImageFromPng = ImageFromPng;
//# sourceMappingURL=Image.js.map