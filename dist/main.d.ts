import { Image } from './Image';
import Color from './Color';
declare function readImg(path: String): Image;
declare function fromScreenshot(posX: any, posY: any, width: any, height: any): Image;
declare function getPercentageColor(image: Image): number;
export { readImg, fromScreenshot, getPercentageColor, Color, Image };
