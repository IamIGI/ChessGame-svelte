import constants from '$lib/GLOBAL/constants';

const { width } = constants;

export function queenEngine(startId: number, targetId: number): boolean {
	if (
		// bishop moves
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
			)) ||
		// rock moves
		// up direction
		startId + width === targetId ||
		(startId + width * 2 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId + width * 3 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 4 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 5 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 6 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId + width * 7 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + width * 6}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		// - down direction
		startId - width === targetId ||
		(startId - width * 2 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId - width * 3 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 4 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 5 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 6 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		(startId - width * 7 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 3}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 4}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 5}"]`))
					.lastElementChild?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - width * 6}"]`))
					.lastElementChild?.classList[0] === 'piece'
			)) ||
		// right direction
		startId + 1 === targetId ||
		(startId + 2 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId + 3 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId + 4 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 3}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId + 5 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 3}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 4}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId + 6 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 3}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 4}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 5}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId + 7 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 3}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 4}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 5}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId + 6}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		// left direction
		startId - 1 === targetId ||
		(startId - 2 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId - 3 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId - 4 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 3}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId - 5 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 3}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 4}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId - 6 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 3}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 4}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 5}"]`)).lastElementChild
					?.classList[0] === 'piece'
			)) ||
		(startId - 7 === targetId &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 1}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 2}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 3}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 4}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 5}"]`)).lastElementChild
					?.classList[0] === 'piece'
			) &&
			!(
				(<HTMLElement>document.querySelector(`[square-id="${startId - 6}"]`)).lastElementChild
					?.classList[0] === 'piece'
			))
	)
		return true;
	return false;
}
