const width = 8;

import Bishop from '$lib/components/pieces/Bishop.svelte';
import King from '$lib/components/pieces/King.svelte';
import Knight from '$lib/components/pieces/Knight.svelte';
import Pawn from '$lib/components/pieces/Pawn.svelte';
import Queen from '$lib/components/pieces/Queen.svelte';
import Rook from '$lib/components/pieces/Rook.svelte';

export const startPieces: (ConstructorOfATypedSvelteComponent | undefined)[] = [
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

export default {
	width,
	startPieces
};
