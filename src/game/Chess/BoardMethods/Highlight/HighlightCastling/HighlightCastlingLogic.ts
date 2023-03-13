import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Cell } from '../../../Cell';
import { IsCellUnderAttack } from '../../../CellMethods/IsCellUnderAttack/IsCellUnderAttack';
import { IsEmpty } from '../../../CellMethods/IsEmpty/IsEmpty';
import { KingMethods } from '../../../PieceMethods/KingMethods/KingMethods';
import { FindPiece } from '../../FindPiece/FindPiece';

export const HighlightCastlingLogic = (
	selectedCell: Cell | null,
	currentColor: Colors | undefined,
	board: Board
) => {
	const { blackKing, whiteKing } = FindPiece.findKings(board);

	const [leftBlackRook, rightBlackRook, leftWhiteRook, rightWhiteRook] =
		FindPiece.findRooksInitialPosition(board);

	const { blackKingCheck, whiteKingCheck } =
		KingMethods.isKingUnderAttack(board);

	//left white castling
	if (
		selectedCell === whiteKing &&
		leftWhiteRook &&
		selectedCell.x === leftWhiteRook.x &&
		!whiteKingCheck &&
		selectedCell.piece!.isFirstStep &&
		leftWhiteRook.piece!.isFirstStep &&
		IsEmpty.Cell(board.getCells(1, 7)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(1, 7)) &&
		IsEmpty.Cell(board.getCells(2, 7)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(2, 7)) &&
		IsEmpty.Cell(board.getCells(3, 7)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(3, 7))
	) {
		board.getCells(2, 7).available = true;
		return true;
	}

	//right white castling
	if (
		rightWhiteRook &&
		whiteKing.x === rightWhiteRook.x &&
		!whiteKingCheck &&
		whiteKing.piece?.isFirstStep &&
		rightWhiteRook.piece?.isFirstStep &&
		IsEmpty.Cell(board.getCells(6, 7)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(6, 7)) &&
		IsEmpty.Cell(board.getCells(5, 7)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(5, 7))
	) {
		if (selectedCell === whiteKing) {
			board.getCells(6, 7).available = true;
			return true;
		}
	}

	//left black castling
	if (
		leftBlackRook &&
		blackKing.x === leftBlackRook.x &&
		!blackKingCheck &&
		blackKing.piece?.isFirstStep &&
		leftBlackRook.piece?.isFirstStep &&
		IsEmpty.Cell(board.getCells(1, 0)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(1, 0)) &&
		IsEmpty.Cell(board.getCells(2, 0)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(2, 0)) &&
		IsEmpty.Cell(board.getCells(3, 0)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(3, 0))
	) {
		if (selectedCell === blackKing) {
			board.getCells(2, 0).available = true;
			return true;
		}
	}

	//right black castling
	if (
		rightBlackRook &&
		blackKing.x === rightBlackRook.x &&
		!blackKingCheck &&
		blackKing.piece?.isFirstStep &&
		rightBlackRook.piece?.isFirstStep &&
		IsEmpty.Cell(board.getCells(5, 0)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(5, 0)) &&
		IsEmpty.Cell(board.getCells(6, 0)) &&
		!IsCellUnderAttack(board, currentColor, board.getCells(6, 0))
	) {
		if (selectedCell === blackKing) {
			board.getCells(6, 0).available = true;
			return true;
		}
	}
	return false;
};
