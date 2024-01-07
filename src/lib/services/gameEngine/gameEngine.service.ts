import { pawnEngine } from '$lib/services/pieceEngine/pawnEngine.service';
import { knightEngine } from '$lib/services/pieceEngine/knightEngine.service';
import { bishopEngine } from '$lib/services/pieceEngine/bishopEngine.service';
import { rookEngine } from '$lib/services/pieceEngine/rookEngine.service';
import { queenEngine } from '$lib/services/pieceEngine/queenEngine.service';
import { kingEngine } from '$lib/services/pieceEngine/kingEngine.service';
import gameStore from '$lib/stores/game.store';
import { get } from 'svelte/store';

const width = 8;

function changePlayer() {
	const gameStoreData = get(gameStore);
	if (gameStoreData.playerTurn === 'black') {
		reverseIds();
		gameStore.updatePlayerTurn('white');
		return;
	} else {
		revertIds();
		gameStore.updatePlayerTurn('black');
		return;
	}
}

function dragStart(e: Event) {
	const squareId = (<HTMLElement>(<HTMLElement>e.target).parentNode).getAttribute('square-id')!;
	gameStore.updateDraggedPieceData(squareId, e.target!);
}

function dragOver(e: Event) {
	e.preventDefault();
}

function dragDrop(e: Event) {
	e.stopPropagation();
	const gameStoreData = get(gameStore);
	const {
		playerTurn,
		piece: { draggedElement }
	} = gameStoreData;

	const correctPlayerTurn = (<HTMLElement>draggedElement.firstChild!).classList.contains(
		playerTurn
	);
	const takenPiece = (<HTMLElement>e.target).classList.contains('piece');
	const valid = checkIfValid(e.target as HTMLElement);
	const opponentPlayerTurn = playerTurn === 'white' ? 'black' : 'white';
	const takenPieceByOpponent =
		(<HTMLElement>(<HTMLElement>e.target).firstChild).classList &&
		(<HTMLElement>(<HTMLElement>e.target).firstChild).classList.contains(opponentPlayerTurn);

	if (correctPlayerTurn) {
		if (takenPieceByOpponent && valid) {
			(<HTMLElement>(<HTMLElement>e.target).parentNode).append(draggedElement);
			(<HTMLElement>e.target).remove(); // remove old piece
			checkForWin();
			changePlayer();
			return;
		}

		if (takenPiece && !takenPieceByOpponent) {
			gameStore.updateInfoMessage('You cannot go here!');
			setTimeout(() => gameStore.updateInfoMessage(''), 2000);
			return;
		}

		if (valid) {
			(<HTMLElement>e.target).append(draggedElement);
			checkForWin();
			changePlayer();
			return;
		}
	}
}

function reverseIds() {
	const allSquares = document.querySelectorAll('.square');
	allSquares.forEach((square, i) => {
		square.setAttribute('square-id', (width * width - 1 - i).toString());
	});
}

function revertIds() {
	const allSquares = document.querySelectorAll('.square');
	allSquares.forEach((square, i) => {
		square.setAttribute('square-id', i.toString());
	});
}

function checkIfValid(target: HTMLElement) {
	const gameStoreData = get(gameStore);
	const targetId =
		Number(target.getAttribute('square-id')) ||
		Number((<HTMLElement>target.parentNode).getAttribute('square-id'));

	const startId = Number(gameStoreData.piece.startPositionId);
	const piece = (gameStoreData.piece.draggedElement as Element).id;

	switch (piece) {
		case 'pawn':
			return pawnEngine(startId, targetId, target);
		case 'knight':
			return knightEngine(startId, targetId);
		case 'bishop':
			return bishopEngine(startId, targetId);
		case 'rook':
			return rookEngine(startId, targetId);
		case 'queen':
			return queenEngine(startId, targetId);
		case 'king':
			return kingEngine(startId, targetId);
		default:
			return false;
	}
}

function checkForWin(): void {
	const kings = Array.from(document.querySelectorAll('#king'));

	function disableDrag() {
		const allSquares = document.querySelectorAll('.square');
		allSquares.forEach((square) => square.children[0]?.setAttribute('draggable', 'false'));
	}

	if (!kings.some((king) => (king.firstChild as Element).classList.contains('white'))) {
		disableDrag();
		gameStore.updateInfoMessage('Black player win!');
		return;
	}

	if (!kings.some((king) => (king.firstChild as Element).classList.contains('black'))) {
		disableDrag();
		gameStore.updateInfoMessage('White player win!');
		return;
	}
	return;
}

export default {
	changePlayer,
	dragStart,
	dragOver,
	dragDrop,
	checkIfValid,
	checkForWin
};
