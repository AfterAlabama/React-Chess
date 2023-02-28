import { Colors } from "../../../helpers/Enums/Colors";
import { PieceNames } from "../../../helpers/Enums/PieceNames";
import { Board } from "../Board";
import { Cell } from "../Cell";
import { BlockCheck } from "../CellMethods/BlockCheck";
import { IsCellUnderAttack } from "../CellMethods/IsCellUnderAttack";
import { IsEmpty } from "../CellMethods/IsEmpty";
import { KingMethods } from "../PieceMethods/KingMethods";
import { FindPiece } from "./FindPiece";

export class Highlight {
  static highlightCastling(
    selectedCell: Cell | null,
    currentColor: Colors | undefined,
    board: Board
  ) {
    const { blackKing, whiteKing } = FindPiece.findKings(board);

    const { leftBlackRook, leftWhiteRook, rightBlackRook, rightWhiteRook } =
      FindPiece.findRooks(board);

    const { blackKingCheck, whiteKingCheck } =
      KingMethods.isKingUnderAttack(board);

    //left white castling
    if (
      whiteKing.x === leftWhiteRook.x &&
      !whiteKingCheck &&
      whiteKing.piece?.isFirstStep &&
      leftWhiteRook.piece?.isFirstStep &&
      IsEmpty.Cell(board.getCells(1, 7)) &&
      !IsCellUnderAttack(board, currentColor, board.getCells(1, 7)) &&
      IsEmpty.Cell(board.getCells(2, 7)) &&
      !IsCellUnderAttack(board, currentColor, board.getCells(2, 7)) &&
      IsEmpty.Cell(board.getCells(3, 7)) &&
      !IsCellUnderAttack(board, currentColor, board.getCells(3, 7))
    ) {
      if (selectedCell === whiteKing) {
        board.getCells(2, 7).available = true;
      }
    }

    //right white castling
    if (
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
      }
    }

    //left black castling
    if (
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
      }
    }

    //right black castling
    if (
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
      }
    }
  }

  static pieceStandingInCheck(
    selectedCell: Cell | null,
    target: Cell,
    board: Board
  ) {
    if (
      selectedCell &&
      BlockCheck.doesPieceBlockTheCheck(target, board, selectedCell)
    ) {
      target.available = false;
      return true;
    }
  }

  static pieceMovingInCheck(
    selectedCell: Cell | null,
    board: Board,
    target: Cell
  ) {
    const { whiteKing, blackKing } = FindPiece.findKings(board);

    const { whiteKingCheck, blackKingCheck } =
      KingMethods.isKingUnderAttack(board);

    if (
      selectedCell &&
      selectedCell.piece &&
      selectedCell.piece.name !== PieceNames.KING &&
      ((selectedCell.piece.color === whiteKing.piece?.color &&
        whiteKingCheck) ||
        (selectedCell.piece.color === blackKing.piece?.color &&
          blackKingCheck)) &&
      !BlockCheck.doesCellBlockTheCheck(target, board, selectedCell)
    ) {
      target.available = false;
      return true;
    }
  }

  static kingEscaping(
    selectedCell: Cell | null,
    board: Board,
    target: Cell,
    currentColor: Colors
  ) {
    if (
      selectedCell?.piece?.name === PieceNames.KING &&
      IsCellUnderAttack(board, currentColor, target)
    ) {
      target.available = false;
      return true;
    }
  }
}
