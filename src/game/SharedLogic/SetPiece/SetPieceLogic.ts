export const SetPieceLogic = <
	CELL extends {
		piece: PIECE | null;
	},
	PIECE extends {
		cell: CELL;
	}
>(
	cell: CELL,
	piece: PIECE
) => {
	cell.piece = piece;
	cell.piece.cell = cell;
};
