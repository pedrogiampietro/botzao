import { Color } from "./main";
interface Image {
    width: number;
    height: number;
    colorAt(x: number, y: number): Color;
}
declare class ImageFromScreenshot implements Image {
    width: number;
    height: number;
    private screen;
    constructor(screen: any);
    colorAt(x: number, y: number): Color;
}
declare class ImageFromPng implements Image {
    width: number;
    height: number;
    private png;
    constructor(png: any);
    colorAt(col: number, row: number): Color;
}
export { Image, ImageFromScreenshot, ImageFromPng };
