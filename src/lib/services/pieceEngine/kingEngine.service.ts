import constants from '$lib/GLOBAL/constants';

const { width } = constants;

export function kingEngine(startId: number, targetId: number): boolean {
	if (
		startId + 1 === targetId ||
		startId - 1 === targetId ||
		startId + width === targetId ||
		startId - width === targetId ||
		startId + width - 1 === targetId ||
		startId + width + 1 === targetId ||
		startId - width - 1 === targetId ||
		startId - width + 1 === targetId
	)
		return true;
	return false;
}
