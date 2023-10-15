import robot from 'robotjs';

setInterval(() => {
	const mousePos = robot.getMousePos();
	console.log(`X: ${mousePos.x}, Y: ${mousePos.y}`);
}, 10);
