import { GetCopyBoardLogic } from '../SharedLogic/GetCopyBoard/GetCopyBoardLogic';
import { InitCellslogic } from '../SharedLogic/InitCells/InitCellsLogic';
import { OrdinaryMoves } from '../SharedLogic/OrdinaryMoves/OrdinaryMoves';
import { PieceAddition } from '../SharedLogic/PieceAddition/PieceAddition';
import { ChCell } from './ChCell';
import { ChPiece } from './Pieces/ChPiece';

export class ChBoard {
	cells: ChCell[][] = [];

	public initCells() {
		InitCellslogic<this, ChPiece, ChCell>(this, ChCell);
	}

	public highlightChCells(selectedChCell: ChCell | null) {
		OrdinaryMoves<ChBoard, ChCell, ChPiece>(this, selectedChCell);
	}

	public getCopyBoard() {
		return GetCopyBoardLogic<ChBoard, ChCell, ChPiece>(this, ChBoard);
	}

	public getCells(y: number, x: number) {
		return this.cells[x][y];
	}

	public addPieces() {
		new PieceAddition().AddAllCheckersPieces(this);
	}
}
