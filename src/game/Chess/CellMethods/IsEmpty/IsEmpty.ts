import { Cell } from '../../Cell';

export class IsEmpty {
	static Cell(cell: Cell): boolean {
		return cell.piece === null;
	}

	static Vertical(cell: Cell, target: Cell): boolean {
		if (cell.y !== target.y) {
			return false;
		}

		const min = Math.min(cell.x, target.x);
		const max = Math.max(cell.x, target.x);

		for (let x = min + 1; x < max; x++) {
			if (!IsEmpty.Cell(cell.board.getCells(cell.y, x))) {
				return false;
			}
		}
		return true;
	}

	static Horizontal(cell: Cell, target: Cell): boolean {
		if (cell.x !== target.x) {
			return false;
		}

		const min = Math.min(cell.y, target.y);
		const max = Math.max(cell.y, target.y);

		for (let y = min + 1; y < max; y++) {
			if (!IsEmpty.Cell(cell.board.getCells(y, cell.x))) {
				return false;
			}
		}
		return true;
	}

	static Diagonal(cell: Cell, target: Cell): boolean {
		const absY = Math.abs(cell.y - target.y);
		const absX = Math.abs(cell.x - target.x);

		if (absY !== absX) {
			return false;
		}

		const dy = cell.y < target.y ? 1 : -1;
		const dx = cell.x < target.x ? 1 : -1;

		for (let i = 1; i < absY; i++) {
			if (
				!IsEmpty.Cell(cell.board.getCells(cell.y + dy * i, cell.x + dx * i))
			) {
				return false;
			}
		}

		return true;
	}
}
