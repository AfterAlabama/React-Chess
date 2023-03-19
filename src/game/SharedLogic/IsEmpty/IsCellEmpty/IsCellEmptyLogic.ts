export const IsCellEmptyLogic = <
	C extends {
		piece: P | null;
	},
	P
>(
	cell: C
) => {
	return cell.piece === null;
};
