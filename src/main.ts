import robot from 'robotjs';
import { ImageFromScreenshot, ImageFromPng, Image } from './Image';
import Color from './Color';

const fs = require('fs');
const { PNG } = require('pngjs');

function readImg(path: String): Image {
	const file = fs.readFileSync(path);
	const png = PNG.sync.read(file);
	return new ImageFromPng(png);
}

function fromScreenshot(
	posX: number,
	posY: number,
	width: number,
	height: number
): Image {
	console.log(
		`Capturing screenshot at X: ${posX}, Y: ${posY} with Width: ${width}, Height: ${height}`
	);
	const screen = robot.screen.capture(posX, posY, width, height);
	const image = new ImageFromScreenshot(screen);
	return image;
}

function getPercentageColor(image: Image) {
	const middleRow = 5;
	const borderWidth = 1;
	const firstColor = image.colorAt(borderWidth, middleRow);
	console.log(
		`First color at middleRow: ${middleRow}, borderWidth: ${borderWidth}: ${firstColor.toString()}`
	);
	let x = borderWidth + 1;

	while (firstColor.isSimilar(image.colorAt(x, middleRow), 0.02)) {
		x += 1;
	}

	console.log(`Last similar color found at x: ${x}`);
	const healthBarWidth = image.width - borderWidth * 2;
	return Math.floor((x / healthBarWidth) * 100);
}

export { readImg, fromScreenshot, getPercentageColor, Color, Image };
