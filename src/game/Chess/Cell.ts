import { Colors } from '../../types/Enums/Colors';
import { Board } from './Board';
import { AddLostPieceLogic } from './CellMethods/AddLostPiece/AddLostPieceLogic';
import { IsEnemyLogic } from '../SharedLogic/IsEnemy/IsEnemyLogic';
import { MovePieceLogic } from '../SharedLogic/MovePiece/MovePieceLogic';
import { SetPieceLogic } from '../SharedLogic/SetPiece/SetPieceLogic';
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
		return IsEnemyLogic<Cell, Piece | null>(target, this);
	}

	public setPiece(piece: Piece): void {
		SetPieceLogic<Cell, Piece>(this, piece);
	}

	addLostPiece(piece: Piece): void {
		AddLostPieceLogic(this, piece);
	}

	movePiece(target: Cell): void {
		MovePieceLogic<Cell, Piece>(this, target);
	}
}
