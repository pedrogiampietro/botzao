class Color {
	readonly r: number;
	readonly g: number;
	readonly b: number;

	constructor(r: number, g: number, b: number) {
		this.r = Math.min(Math.max(r, 0), 255); // Boundary check
		this.g = Math.min(Math.max(g, 0), 255); // Boundary check
		this.b = Math.min(Math.max(b, 0), 255); // Boundary check
	}

	static fromString(colorString: string): Color {
		// Ensure there's no '#' at the start
		if (colorString.startsWith('#')) {
			colorString = colorString.substr(1);
		}

		const r = parseInt(colorString.substring(0, 2), 16);
		const g = parseInt(colorString.substring(2, 4), 16);
		const b = parseInt(colorString.substring(4, 6), 16);

		return new Color(r, g, b);
	}

	isSimilar(color: Color, threshold: number): boolean {
		let r = 255 - Math.abs(color.r - this.r);
		let g = 255 - Math.abs(color.g - this.g);
		let b = 255 - Math.abs(color.b - this.b);

		r /= 255;
		g /= 255;
		b /= 255;

		const similarity = 1 - (r + g + b) / 3;
		return similarity < threshold;
	}

	toString(): string {
		return `R:${this.r}, G:${this.g}, B:${this.b}`;
	}
}

export default Color;
