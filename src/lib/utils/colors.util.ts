function colorBoard(i: number) {
	const row = Math.floor((63 - i) / 8) + 1;
	if (row % 2 === 0) {
		if (i % 2 === 0) {
			return 'beige';
		} else {
			return 'brown';
		}
	} else {
		if (i % 2 === 0) {
			return 'brown';
		} else {
			return 'beige';
		}
	}
}

function colorPieces(i: number) {
	if (i <= 15) return 'black';
	if (i >= 48) return 'white';
	return '';
	// throw new Error('Bad index provided')
}

export default {
	colorBoard,
	colorPieces
};
