<script lang="ts">
	import Rook from '$lib/components/pieces/Rook.svelte';
	import Knight from '$lib/components/pieces/Knight.svelte';
	import Bishop from '$lib/components/pieces/Bishop.svelte';
	import King from '$lib/components/pieces/King.svelte';
	import Queen from '$lib/components/pieces/Queen.svelte';
	import Pawn from '$lib/components/pieces/Pawn.svelte';
	import { onMount } from 'svelte';
	import colorsUtil from '$lib/utils/colors.util';

	const startPieces: (ConstructorOfATypedSvelteComponent | undefined)[] = [
		Rook,
		Knight,
		Bishop,
		Queen,
		King,
		Bishop,
		Knight,
		Rook,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		Pawn,
		Rook,
		Knight,
		Bishop,
		Queen,
		King,
		Bishop,
		Knight,
		Rook
	];

	const width = 8;
	let playerTurn = 'black';
	let infoMessage = '';

	onMount(() => {
		const allSquares = document.querySelectorAll('.square');

		allSquares.forEach((square) => {
			square.addEventListener('dragstart', dragStart);
			square.addEventListener('dragover', dragOver);
			square.addEventListener('drop', dragDrop);
		});
	});

	let startPositionId: string | null;
	let draggedElement: any;

	function dragStart(e: Event) {
		startPositionId = (<HTMLElement>(<HTMLElement>e.target).parentNode).getAttribute('square-id');
		draggedElement = e.target;
	}

	function dragOver(e: Event) {
		e.preventDefault();
	}

	function dragDrop(e: Event) {
		e.stopPropagation();

		const correctPlayerTurn = draggedElement.firstChild.classList.contains(playerTurn);
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
				changePlayer();
				return;
			}

			if (takenPiece && !takenPieceByOpponent) {
				infoMessage = 'you cannot go here!';
				setTimeout(() => (infoMessage = ''), 2000);
				return;
			}

			if (valid) {
				(<HTMLElement>e.target).append(draggedElement);
				changePlayer();
				return;
			}
		}
	}

	function changePlayer() {
		if (playerTurn === 'black') {
			playerTurn = 'white';
			reverseIds();
		} else {
			revertIds();
			playerTurn = 'black';
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
		const targetId =
			Number(target.getAttribute('square-id')) ||
			Number((<HTMLElement>target.parentNode).getAttribute('square-id'));

		const startId = Number(startPositionId);
		const piece = draggedElement.id;

		switch (piece) {
			case 'pawn':
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
			case 'knight':
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
				break;
			case 'bishop':
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
				break;
			case 'rook':
				if (
					// up direction
					startId + width === targetId ||
					(startId + width * 2 === targetId &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
						)) ||
					(startId + width * 3 === targetId &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
						) &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2}"]`))
								.lastElementChild?.classList[0] === 'piece'
						)) ||
					(startId + width * 4 === targetId &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
						)) ||
					(startId - width * 3 === targetId &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
						) &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2}"]`))
								.lastElementChild?.classList[0] === 'piece'
						)) ||
					(startId - width * 4 === targetId &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
			case 'queen':
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
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
						)) ||
					(startId + width * 3 === targetId &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
						) &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId + width * 2}"]`))
								.lastElementChild?.classList[0] === 'piece'
						)) ||
					(startId + width * 4 === targetId &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId + width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
						)) ||
					(startId - width * 3 === targetId &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
						) &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId - width * 2}"]`))
								.lastElementChild?.classList[0] === 'piece'
						)) ||
					(startId - width * 4 === targetId &&
						!(
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
							(<HTMLElement>document.querySelector(`[square-id="${startId - width}"]`))
								.lastElementChild?.classList[0] === 'piece'
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
			case 'king':
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
			default:
				return false;
		}
	}
</script>

<div id="gameboard">
	{#each startPieces as startPiece, i}
		<div class={`square ${colorsUtil.colorBoard(i)}`} square-id={i}>
			<svelte:component this={startPiece} {...{ color: colorsUtil.colorPieces(i) }} />
		</div>
	{/each}
</div>
<p>It is <span id="player">{playerTurn}</span>'s go.</p>
<p id="info-display">{infoMessage}</p>

<style>
</style>
