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

	onMount(() => {
		const allSquares = document.querySelectorAll('#gameboard .square');

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
		// this will work only if something exists in target element
		(<HTMLElement>(<HTMLElement>e.target).parentNode).append(draggedElement);
		(<HTMLElement>e.target).remove(); // remove old piece

		// on empty square
		// e.target.append(draggedElement);
	}
</script>

<div id="gameboard">
	{#each startPieces as startPiece, i}
		<div class={`square ${colorsUtil.colorBoard(i)}`} square-id={i}>
			<svelte:component this={startPiece} {...{ color: colorsUtil.colorPieces(i) }} />
		</div>
	{/each}
</div>
<p>It is <span id="player"></span> go.</p>
<p id="info-display"></p>

<style>
</style>
