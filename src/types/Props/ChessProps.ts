import { Board } from '../../game/Chess/Board';
import { Cell } from '../../game/Chess/Cell';
import { Piece } from '../../game/Chess/Pieces/Piece';
import { Player } from '../../game/Chess/Player';

export interface Boardprops {
	board: Board;
	setBoard: (board: Board) => void;
	currentPlayer: Player;
	swapPlayers: () => void;
	selectedCell: Cell | null;
	setSelectedCell: (cell: Cell | null) => void;
}

export interface CellProps {
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
	selectedCell: Cell | null;
	setSelectedCell: (cell: Cell | null) => void;
	currentPlayer: Player;
}

export interface Lostprops {
	title: string;
	pieces: Piece[];
	board: Board;
	currentPlayer: Player;
}
