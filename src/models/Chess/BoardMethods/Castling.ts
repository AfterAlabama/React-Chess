import { Board } from "../Board";
import { FindPiece } from "./FindPiece";
import { Cell } from "../Cell";

export class Castling {
  static KingMovesWhileCastling(
    target: Cell,
    selectedCell: Cell | null,
    board: Board,
    setSelectedCell: (cell: Cell | null) => void,
    swapPlayers: () => void
  ) {
    const { blackKing, whiteKing } = FindPiece.findKings(board);

    if (selectedCell && selectedCell.piece && selectedCell.piece.isFirstStep) {
      if (
        selectedCell === whiteKing &&
        target.x === 7 &&
        (target.y === 2 || target.y === 6)
      ) {
        selectedCell.movePiece(target);
        this.RookMovesWhileCastling(board);
        setSelectedCell(null);
        swapPlayers();
      }

      if (
        selectedCell === blackKing &&
        target.x === 0 &&
        (target.y === 2 || target.y === 6)
      ) {
        selectedCell.movePiece(target);
        this.RookMovesWhileCastling(board);
        setSelectedCell(null);
        swapPlayers();
      }
    }
  }

  static RookMovesWhileCastling(board: Board) {
    const { leftBlackRook, leftWhiteRook, rightBlackRook, rightWhiteRook } =
      FindPiece.findRooks(board);

    const { blackKing, whiteKing } = FindPiece.findKings(board);

    if (
      whiteKing.x === 7 &&
      whiteKing.y === 2 &&
      leftWhiteRook.piece?.isFirstStep
    ) {
      board.getCells(3, 7).setPiece(leftWhiteRook.piece!);
      leftWhiteRook.piece = null;
    }

    if (
      whiteKing.x === 7 &&
      whiteKing.y === 6 &&
      rightWhiteRook.piece?.isFirstStep
    ) {
      board.getCells(5, 7).setPiece(rightWhiteRook.piece!);
      rightWhiteRook.piece = null;
    }

    if (
      blackKing.x === 0 &&
      blackKing.y === 2 &&
      leftBlackRook.piece?.isFirstStep
    ) {
      board.getCells(3, 0).setPiece(leftBlackRook.piece!);
      leftBlackRook.piece = null;
    }

    if (
      blackKing.x === 0 &&
      blackKing.y === 6 &&
      rightBlackRook.piece?.isFirstStep
    ) {
      board.getCells(5, 0).setPiece(rightBlackRook.piece!);
      rightBlackRook.piece = null;
    }
  }
}
