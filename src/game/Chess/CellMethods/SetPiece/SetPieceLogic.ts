import { Cell } from '../../Cell';
import { Piece } from '../../Pieces/Piece';

export const SetPieceLogic = (cell: Cell, piece: Piece): void => {
	cell.piece = piece;
	cell.piece.cell = cell;
};
