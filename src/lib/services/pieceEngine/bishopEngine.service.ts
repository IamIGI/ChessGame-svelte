import constants from '$lib/GLOBAL/constants';

const { width } = constants;

export function bishopEngine(startId: number, targetId: number) {
	if (
		startId + width + 1 === targetId ||
		(startId + width * 2 + 2 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 3 + 3 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 4 + 4 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3 + 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 5 + 5 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3 + 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 4 + 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 6 + 6 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3 + 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 4 + 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 5 + 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 7 + 7 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3 + 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 4 + 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 5 + 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 6 + 6}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		//--
		startId - width - 1 === targetId ||
		(startId - width * 2 - 2 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 3 - 3 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 4 - 4 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3 - 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 5 - 5 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3 - 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 4 - 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 6 - 6 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3 - 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 4 - 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 5 - 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 7 - 7 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3 - 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 4 - 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 5 - 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 6 - 6}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		// backward --
		startId - width + 1 === targetId ||
		(startId - width * 2 + 2 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 3 + 3 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 4 + 4 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3 + 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 5 + 5 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3 + 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 4 + 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 6 + 6 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3 + 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 4 + 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 5 + 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 7 + 7 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width + 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2 + 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3 + 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 4 + 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 5 + 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 6 + 6}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		// backwards ++
		startId + width - 1 === targetId ||
		(startId + width * 2 - 2 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 3 - 3 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 4 - 4 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3 - 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 5 - 5 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3 - 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 4 - 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 6 - 6 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3 - 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 4 - 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 5 - 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 7 - 7 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width - 1}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2 - 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3 - 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 4 - 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 5 - 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 6 - 6}"]`))
					.lastElementChild?.classList[0] === 'piece'
			))
	)
		return true;
	return false;
}
