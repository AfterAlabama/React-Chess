import { Colors } from '../../types/Enums/Colors';
import { Highlight } from './BoardMethods/Highlight/Highlight';
import { Cell } from './Cell';
import { GetCopyBoardLogic } from '../SharedLogic/GetCopyBoard/GetCopyBoardLogic';
import { PieceAddition } from '../SharedLogic/PieceAddition/PieceAddition';
import { Piece } from './Pieces/Piece';
import { InitCellslogic } from '../SharedLogic/InitCells/InitCellsLogic';
import { GetCellsLogic } from '../SharedLogic/GetCells/GetCellsLogic';
import { OrdinaryMoves } from '../SharedLogic/OrdinaryMoves/OrdinaryMoves';

export class Board {
	cells: Cell[][] = [];
	lostBlackPieces: Piece[] = [];
	lostWhitePieces: Piece[] = [];

	public initCells() {
		InitCellslogic<Board, Piece, Cell>(this, Cell);
	}

	public highlightCells(selectedCell: Cell | null, currentColor: Colors) {
		Highlight.highlightCastling(selectedCell, currentColor, this);
		Highlight.pieceStandingInCheck(selectedCell, this);
		Highlight.pieceMovingInCheck(selectedCell, this);
		Highlight.kingEscaping(selectedCell, this, currentColor);

		OrdinaryMoves<Board, Cell, Piece>(this, selectedCell);
	}

	public getCopyBoard() {
		return GetCopyBoardLogic<Board, Cell, Piece>(this, Board);
	}

	public getCells(y: number, x: number) {
		return GetCellsLogic<Board, Cell, Piece>(y, x, this);
	}

	public addPieces() {
		new PieceAddition().AddingAllChessPieces(this);
	}
}
