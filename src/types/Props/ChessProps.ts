import { Board } from '../../game/Chess/Board';
import { Cell } from '../../game/Chess/Cell';
import { Piece } from '../../game/Chess/Pieces/Piece';
import { Player } from '../../game/Chess/Player';

export interface BoardProps {
	board: Board;
	setBoard: (board: Board) => void;
	currentPlayer: Player;
	swapPlayers: () => void;
	selectedCell: Cell | null;
	setSelectedCell: (cell: Cell | null) => void;
}

export interface CellProps
	extends Pick<
		BoardProps,
		'selectedCell' | 'setSelectedCell' | 'currentPlayer'
	> {
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
}

export interface LostProps extends Pick<BoardProps, 'board' | 'currentPlayer'> {
	title: string;
	pieces: Piece[];
}
