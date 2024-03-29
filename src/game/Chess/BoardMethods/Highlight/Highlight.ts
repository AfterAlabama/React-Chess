import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Cell } from '../../Cell';
import { HighlightCastlingLogic } from './HighlightCastling/HighlightCastlingLogic';
import { KingEscapingLogic } from './KingEscaping/KingEscapingLogic';
import { PieceMovingInCheckLogic } from './PieceMovingInCheck/PieceMovingInCheckLogic';
import { PieceStandingInCheckLogic } from './PieceStandingInCheck/PieceStandingInCheckLogic';

export class Highlight {
	static highlightCastling(
		selectedCell: Cell | null,
		currentColor: Colors | undefined,
		board: Board
	) {
		return HighlightCastlingLogic(selectedCell, currentColor, board);
	}

	static pieceStandingInCheck(selectedCell: Cell | null, board: Board) {
		PieceStandingInCheckLogic(selectedCell, board);
	}

	static pieceMovingInCheck(selectedCell: Cell | null, board: Board) {
		PieceMovingInCheckLogic(selectedCell, board);
	}

	static kingEscaping(
		selectedCell: Cell | null,
		board: Board,
		currentColor: Colors
	) {
		KingEscapingLogic(selectedCell, board, currentColor);
	}
}
