import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Bishop } from '../../Pieces/Bishop';
import { King } from '../../Pieces/King';
import { Knight } from '../../Pieces/Knight';
import { Pawn } from '../../Pieces/Pawn';
import { Queen } from '../../Pieces/Queen';
import { Rook } from '../../Pieces/Rook';

export class PieceAddition {
	private addKings(board: Board): void {
		new King(Colors.BLACK, board.getCells(4, 0));
		new King(Colors.WHITE, board.getCells(4, 7));
	}

	private addQueens(board: Board): void {
		new Queen(Colors.BLACK, board.getCells(3, 0));
		new Queen(Colors.WHITE, board.getCells(3, 7));
	}

	private addRooks(board: Board): void {
		new Rook(Colors.BLACK, board.getCells(0, 0));
		new Rook(Colors.BLACK, board.getCells(7, 0));
		new Rook(Colors.WHITE, board.getCells(0, 7));
		new Rook(Colors.WHITE, board.getCells(7, 7));
	}

	private addBishops(board: Board): void {
		new Bishop(Colors.BLACK, board.getCells(2, 0));
		new Bishop(Colors.BLACK, board.getCells(5, 0));
		new Bishop(Colors.WHITE, board.getCells(2, 7));
		new Bishop(Colors.WHITE, board.getCells(5, 7));
	}

	private addKnights(board: Board): void {
		new Knight(Colors.BLACK, board.getCells(1, 0));
		new Knight(Colors.BLACK, board.getCells(6, 0));
		new Knight(Colors.WHITE, board.getCells(1, 7));
		new Knight(Colors.WHITE, board.getCells(6, 7));
	}

	private addPawns(board: Board): void {
		for (let i = 0; i < 8; i++) {
			new Pawn(Colors.BLACK, board.getCells(i, 1));
			new Pawn(Colors.WHITE, board.getCells(i, 6));
		}
	}

	public AddingAllPieces(board: Board): void {
		this.addKings(board);
		this.addQueens(board);
		this.addRooks(board);
		this.addBishops(board);
		this.addKnights(board);
		this.addPawns(board);
	}
}
