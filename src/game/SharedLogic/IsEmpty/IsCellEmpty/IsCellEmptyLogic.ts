export const IsCellEmptyLogic = <
	CELL extends {
		piece: PIECE | null;
	},
	PIECE
>(
	cell: CELL
) => {
	return cell.piece === null;
};
