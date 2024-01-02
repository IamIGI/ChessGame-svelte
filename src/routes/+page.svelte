<script lang="ts">
	import Rook from '$lib/components/pieces/Rook.svelte';
	import Knight from '$lib/components/pieces/Knight.svelte';
	import Bishop from '$lib/components/pieces/Bishop.svelte';
	import King from '$lib/components/pieces/King.svelte';
	import Queen from '$lib/components/pieces/Queen.svelte';
	import Pawn from '$lib/components/pieces/Pawn.svelte';
	import { onMount } from 'svelte';
	import colorsUtil from '$lib/utils/colors.util';

	const startPieces: (ConstructorOfATypedSvelteComponent | null)[] = [
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
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
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
		console.log('targetId', targetId);
		console.log('startId', startId);
		console.log('piece', piece);
		return true; //change later
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
