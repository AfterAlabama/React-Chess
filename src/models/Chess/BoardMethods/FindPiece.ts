import { Colors } from "../../../helpers/Colors";
import { PieceNames } from "../../../helpers/PieceNames";
import { Board } from "../Board";
import { Cell } from "../Cell";

export class FindPiece {
  static findKings(board: Board) {
    let blackKing = new Cell(0, 0, Colors.BLACK, board, null);

    let whiteKing = new Cell(0, 0, Colors.WHITE, board, null);

    for (let i = 0; i < board.cells.length; i++) {
      const row = board.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if (
          target.piece &&
          target.piece.name === PieceNames.KING &&
          target.piece.color === Colors.BLACK
        ) {
          blackKing = target;
        }
        if (
          target.piece &&
          target.piece.name === PieceNames.KING &&
          target.piece.color === Colors.WHITE
        ) {
          whiteKing = target;
        }
      }
    }
    return { whiteKing, blackKing };
  }

  static findRooks(board: Board) {
    let leftBlackRook = new Cell(0, 0, Colors.BLACK, board, null);

    let rightBlackRook = new Cell(0, 7, Colors.WHITE, board, null);

    let leftWhiteRook = new Cell(7, 0, Colors.BLACK, board, null);

    let rightWhiteRook = new Cell(7, 7, Colors.WHITE, board, null);

    for (let i = 0; i < board.cells.length; i++) {
      const row = board.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if (
          target.piece?.name === PieceNames.ROOK &&
          target.piece.color === Colors.BLACK &&
          target.x === 0 &&
          target.y === 0
        ) {
          leftBlackRook = target;
        }

        if (
          target.piece?.name === PieceNames.ROOK &&
          target.piece.color === Colors.BLACK &&
          target.y === 7 &&
          target.x === 0
        ) {
          rightBlackRook = target;
        }

        if (
          target.piece?.name === PieceNames.ROOK &&
          target.piece.color === Colors.WHITE &&
          target.y === 0 &&
          target.x === 7
        ) {
          leftWhiteRook = target;
        }

        if (
          target.piece?.name === PieceNames.ROOK &&
          target.piece.color === Colors.WHITE &&
          target.y === 7 &&
          target.x === 7
        ) {
          rightWhiteRook = target;
        }
      }
    }
    return { leftBlackRook, rightBlackRook, leftWhiteRook, rightWhiteRook };
  }
}
