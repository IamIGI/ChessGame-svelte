import constants from '$lib/GLOBAL/constants';

const { width } = constants;

export function knightEngine(startId: number, targetId: number): boolean {
	if (
		startId + width * 2 - 1 === targetId ||
		startId + width * 2 + 1 === targetId ||
		startId + width - 2 === targetId ||
		startId + width + 2 === targetId ||
		startId - width * 2 - 1 === targetId ||
		startId - width * 2 + 1 === targetId ||
		startId - width - 2 === targetId ||
		startId - width + 2 === targetId
	) {
		return true;
	}
	return false;
}
