export const SetPieceLogic = <
	C extends {
		piece: P | null;
	},
	P extends {
		cell: C;
	}
>(
	cell: C,
	piece: P
): void => {
	cell.piece = piece;
	cell.piece.cell = cell;
};
