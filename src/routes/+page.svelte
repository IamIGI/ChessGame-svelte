<script lang="ts">
	import { onMount } from 'svelte';
	import colorsUtil from '$lib/utils/colors.util';
	import gameEngineService from '$lib/services/gameEngine/gameEngine.service';
	import constants from '$lib/GLOBAL/constants';
	import gameStore from '$lib/stores/game.store';

	const startPieces = constants.startPieces;

	onMount(() => {
		const allSquares = document.querySelectorAll('.square');

		allSquares.forEach((square) => {
			square.addEventListener('dragstart', (e) => gameEngineService.dragStart(e));
			square.addEventListener('dragover', (e) => gameEngineService.dragOver(e));
			square.addEventListener('drop', (e) => gameEngineService.dragDrop(e));
		});
	});
</script>

<div id="gameboard">
	{#each startPieces as startPiece, i}
		<div class={`square ${colorsUtil.colorBoard(i)}`} square-id={i}>
			<svelte:component this={startPiece} {...{ color: colorsUtil.colorPieces(i) }} />
		</div>
	{/each}
</div>
<p>It is <span id="player">{$gameStore.playerTurn}</span>'s go.</p>
<p id="info-display">{$gameStore.infoMessage}</p>

<style>
</style>
