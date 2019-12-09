

function genFade() {
	let text = '';
	for (let i = 0; i < 200; i++) {
		for (let j = 0; j < 10; j++) {
			const str = `-${i + "." + j}px -${i + "." + j}px #ffffff,`;
			text += (i === 0) ? ((j > 5) ? str : "") : str;
			// text += str;
		}
	}
	return text.slice(0, -1)
}

export default genFade;