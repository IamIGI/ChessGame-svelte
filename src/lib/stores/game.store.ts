import type { Player } from '$lib/services/gameEngine/gameEngine.models';
import { writable } from 'svelte/store';

export interface GameInterface {
	infoMessage: string;
	playerTurn: Player;
	piece: {
		startPositionId: string | null;
		draggedElement: any;
	};
}

const initGameData: GameInterface = {
	infoMessage: '',
	playerTurn: 'black',
	piece: {
		startPositionId: null,
		draggedElement: undefined
	}
};

const gameStore = () => {
	const { update, subscribe } = writable<GameInterface>(initGameData);

	const updateInfoMessage = (value: string) => {
		update((prev) => {
			return { ...prev, infoMessage: value };
		});
	};

	const updatePlayerTurn = (value: Player) => {
		update((prev) => {
			return { ...prev, playerTurn: value };
		});
	};

	const updateDraggedPieceData = (startPositionId: string | null, draggedElement: any) => {
		update((prev) => {
			return {
				...prev,
				piece: { startPositionId, draggedElement }
			};
		});
	};

	return {
		updateInfoMessage,
		updatePlayerTurn,
		updateDraggedPieceData,
		subscribe
	};
};
export default gameStore();
