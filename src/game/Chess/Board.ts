import { Colors } from '../../types/Enums/Colors';
import { Highlight } from './BoardMethods/Highlight/Highlight';
import { Cell } from './Cell';
import { InitCellslogic } from './BoardMethods/InitCells/InitCellsLogic';
import { GetCopyBoardLogic } from './BoardMethods/GetCopyBoard/GetCopyBoardLogic';
import { PieceAddition } from './BoardMethods/PieceAddition/PieceAddition';
import { Piece } from './Pieces/Piece';

export class Board {
	cells: Cell[][] = [];
	lostBlackPieces: Piece[] = [];
	lostWhitePieces: Piece[] = [];

	public initCells(): void {
		InitCellslogic(this);
	}

	public highlightCells(selectedCell: Cell | null, currentColor: Colors): void {
		Highlight.highlightCastling(selectedCell, currentColor, this);
		Highlight.pieceStandingInCheck(selectedCell, this);
		Highlight.pieceMovingInCheck(selectedCell, this);
		Highlight.kingEscaping(selectedCell, this, currentColor);
		Highlight.ordinaryMoves(this, selectedCell);
	}

	public getCopyBoard(): Board {
		return GetCopyBoardLogic(this);
	}

	public getCells(y: number, x: number) {
		return this.cells[x][y];
	}

	public addPieces(): void {
		new PieceAddition().AddingAllPieces(this);
	}
}
