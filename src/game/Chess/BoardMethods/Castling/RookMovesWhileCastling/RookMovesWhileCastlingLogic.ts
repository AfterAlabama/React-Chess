import { Board } from '../../../Board';
import { FindPiece } from '../../FindPiece/FindPiece';

export const RookMovesWhileCastlingLogic = (board: Board): boolean => {
	const [leftBlackRook, rightBlackRook, leftWhiteRook, rightWhiteRook] =
		FindPiece.findRooksInitialPosition(board);

	const { blackKing, whiteKing } = FindPiece.findKings(board);

	if (
		leftWhiteRook &&
		whiteKing.x === 7 &&
		whiteKing.y === 2 &&
		leftWhiteRook.piece?.isFirstStep
	) {
		board.getCells(3, 7).setPiece(leftWhiteRook.piece!);
		leftWhiteRook.piece = null;
		return true;
	}

	if (
		rightWhiteRook &&
		whiteKing.x === 7 &&
		whiteKing.y === 6 &&
		rightWhiteRook.piece?.isFirstStep
	) {
		board.getCells(5, 7).setPiece(rightWhiteRook.piece!);
		rightWhiteRook.piece = null;
		return true;
	}

	if (
		leftBlackRook &&
		blackKing.x === 0 &&
		blackKing.y === 2 &&
		leftBlackRook.piece?.isFirstStep
	) {
		board.getCells(3, 0).setPiece(leftBlackRook.piece!);
		leftBlackRook.piece = null;
		return true;
	}

	if (
		rightBlackRook &&
		blackKing.x === 0 &&
		blackKing.y === 6 &&
		rightBlackRook.piece?.isFirstStep
	) {
		board.getCells(5, 0).setPiece(rightBlackRook.piece!);
		rightBlackRook.piece = null;
		return true;
	}
	return false;
};
