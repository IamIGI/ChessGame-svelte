import constants from '$lib/GLOBAL/constants';

const { width } = constants;

export function pawnEngine(startId: number, targetId: number, target: HTMLElement): boolean {
	const starterRow = [8, 9, 10, 11, 12, 13, 14, 15];

	//pawn moves forward
	if (
		(starterRow.includes(startId) && startId + width * 2 === targetId) ||
		(startId + width === targetId && target.classList[0] === 'square')
	)
		return true;

	//pawn moves diagonally (need opponent on square to do it)
	if (
		(startId + width - 1 === targetId && target.classList[0] === 'piece') ||
		(startId + width + 1 === targetId && target.classList[0] === 'piece')
	)
		return true;
	return false;
}
