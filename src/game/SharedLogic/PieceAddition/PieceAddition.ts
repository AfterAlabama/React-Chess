import { Colors } from '../../../types/Enums/Colors';
import { ChBoard } from '../../Checkers/ChBoard';
import { Checker } from '../../Checkers/Pieces/Checker';
import { Board } from '../../Chess/Board';
import { Bishop } from '../../Chess/Pieces/Bishop';
import { King } from '../../Chess/Pieces/King';
import { Knight } from '../../Chess/Pieces/Knight';
import { Pawn } from '../../Chess/Pieces/Pawn';
import { Queen } from '../../Chess/Pieces/Queen';
import { Rook } from '../../Chess/Pieces/Rook';

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

	private addCheckers(board: ChBoard): void {
		for (let i = 0; i < 3; i++) {
			const row = board.cells[i];
			for (let j = 0; j < row.length; j++) {
				if ((i + j) % 2 !== 0) {
					new Checker(Colors.BLACK, board.getCells(j, i));
				}
			}
		}
		for (let i = 5; i < 8; i++) {
			const row = board.cells[i];
			for (let j = 0; j < row.length; j++) {
				if ((i + j) % 2 !== 0) {
					new Checker(Colors.WHITE, board.getCells(j, i));
				}
			}
		}
	}

	public AddingAllChessPieces(board: Board): void {
		this.addKings(board);
		this.addQueens(board);
		this.addRooks(board);
		this.addBishops(board);
		this.addKnights(board);
		this.addPawns(board);
	}

	public AddAllCheckersPieces(board: ChBoard): void {
		this.addCheckers(board)
	}
}
