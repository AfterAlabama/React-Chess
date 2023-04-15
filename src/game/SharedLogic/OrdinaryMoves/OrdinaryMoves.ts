export const OrdinaryMoves = <
	BOARD extends {
		cells: CELL[][];
	},
	CELL extends {
		available: boolean;
		piece: PIECE | null;
	},
	PIECE extends {
		canMove: (target: CELL) => boolean;
	}
>(
	board: BOARD,
	selectedCell: CELL | null
) => {
	for (let i = 0; i < board.cells.length; i++) {
		const row: CELL[] = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const target = row[j];
			target.available = !!selectedCell?.piece?.canMove(target);
		}
	}
};
