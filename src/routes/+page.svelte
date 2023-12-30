<script lang="ts" >
	import Rook from "$lib/components/pieces/Rook.svelte";
	import Knight from "$lib/components/pieces/Knight.svelte";
	import Bishop from "$lib/components/pieces/Bishop.svelte";
	import King from "$lib/components/pieces/King.svelte";
	import Queen from "$lib/components/pieces/Queen.svelte";
	import Pawn from "$lib/components/pieces/Pawn.svelte";

const startPieces = [
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

function colorBoard(i: number) {
  const row = Math.floor((63 - i) / 8) + 1;
  if (row % 2 === 0) {
    if(i % 2 === 0 ) {
        return 'beige'
    } else {
        return 'brown'
    }
  } else {
    if(i % 2 === 0) {
        return 'brown'
    } else {
        return 'beige'
    }
    
  }
}

</script>

 <div id="gameboard">
    {#each startPieces as startPiece, i}
        <div class={`square ${colorBoard(i)}`} id={`square-id-${i}`}><svelte:component this={startPiece} /></div>
    {/each}
 </div>
    <p>It is <span id="player"></span> go.</p>
    <p id="info-display"></p>

<style>


</style>