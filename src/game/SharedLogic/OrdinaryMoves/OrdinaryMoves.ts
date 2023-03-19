export const OrdinaryMoves = <
	T extends {
		cells: C[][];
	},
	C extends {
		available: boolean;
		piece: P | null;
	},
	P extends {
		canMove: (target: C) => boolean;
	}
>(
	board: T,
	selectedCell: C | null
): void => {
	for (let i = 0; i < board.cells.length; i++) {
		const row: C[] = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const target = row[j];
			target.available = !!selectedCell?.piece?.canMove(target);
		}
	}
};
