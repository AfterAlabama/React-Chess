import { Colors } from "../../../helpers/Colors";
import { PieceNames } from "../../../helpers/PieceNames";
import { Board } from "../../../models/Chess/Board";
import { Cell } from "../../../models/Chess/Cell";
import { Queen } from "../../../models/Chess/Pieces/Queen";


export function pawnPromotion(
  target: Cell,
  selectedCell: Cell | null,
  board: Board
) {
  if (
    selectedCell &&
    selectedCell.piece &&
    selectedCell.piece.name === PieceNames.PAWN
  ) {
    if (target.x === 0) {
      const whiteQueen = new Queen(
        Colors.WHITE,
        board.getCells(target.y, target.x)
      );
      selectedCell.piece = null;
      target.setPiece(whiteQueen.cell.piece!);
    };

    if (target.x === 7) {
      const blackQueen = new Queen(
        Colors.BLACK,
        board.getCells(target.y, target.x)
      );
      selectedCell.piece = null;
      target.setPiece(blackQueen.cell.piece!);
    }
  }
}