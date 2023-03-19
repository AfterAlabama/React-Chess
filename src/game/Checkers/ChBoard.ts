import { GetCopyBoardLogic } from '../SharedLogic/GetCopyBoard/GetCopyBoardLogic';
import { InitCellslogic } from '../SharedLogic/InitCells/InitCellsLogic';
import { OrdinaryMoves } from '../SharedLogic/OrdinaryMoves/OrdinaryMoves';
import { PieceAddition } from '../SharedLogic/PieceAddition/PieceAddition';
import { ChCell } from './ChCell';
import { ChPiece } from './Pieces/ChPiece';

export class ChBoard {
	cells: ChCell[][] = [];

	public initCells(): void {
		InitCellslogic<this, ChPiece, ChCell>(this, ChCell);
	}

	public highlightChCells(selectedChCell: ChCell | null): void {
		OrdinaryMoves<ChBoard, ChCell, ChPiece>(this, selectedChCell);
	}

	public getCopyBoard(): ChBoard {
		return GetCopyBoardLogic<ChBoard, ChCell, ChPiece>(this, ChBoard);
	}

	public getCells(y: number, x: number): ChCell {
		return this.cells[x][y];
	}

	public addPieces(): void {
		new PieceAddition().AddAllCheckersPieces(this);
	}
}
