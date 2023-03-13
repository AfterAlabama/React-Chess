import { Colors } from '../../types/Enums/Colors';
import { Board } from './Board';
import { AddLostPieceLogic } from './CellMethods/AddLostPiece/AddLostPieceLogic';
import { IsEnemyLogic } from './CellMethods/IsEnemy/IsEnemyLogic';
import { MovePieceLogic } from './CellMethods/MovePiece/MovePieceLogic';
import { SetPieceLogic } from './CellMethods/SetPiece/SetPieceLogic';
import { Piece } from './Pieces/Piece';

export class Cell {
	x: number;
	y: number;
	color: Colors;
	piece: Piece | null;
	board: Board;
	available: boolean;
	id: number;

	constructor(
		x: number,
		y: number,
		color: Colors,
		board: Board,
		piece: Piece | null
	) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.piece = piece;
		this.board = board;
		this.available = false;
		this.id = Number(`${y}.${x}`);
	}

	public isEnemy(target: Cell): boolean {
		return IsEnemyLogic(target, this);
	}

	public setPiece(piece: Piece): void {
		SetPieceLogic(this, piece);
	}

	addLostPiece(piece: Piece): void {
		AddLostPieceLogic(this, piece);
	}

	movePiece(target: Cell): void {
		MovePieceLogic(this, target);
	}
}
