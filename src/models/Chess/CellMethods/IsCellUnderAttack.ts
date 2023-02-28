import { Colors } from "../../../helpers/Enums/Colors";
import { PieceNames } from "../../../helpers/Enums/PieceNames";
import { Board } from "../Board";
import { Cell } from "../Cell";
import { PawnMethods } from "../PieceMethods/PawnMethods";

export const IsCellUnderAttack = (
  board: Board,
  currentPlayer: Colors | undefined,
  target: Cell
) => {
  let count: number = 0;
  for (let i = 0; i < board.cells.length; i++) {
    const row = board.cells[i];
    for (let j = 0; j < row.length; j++) {
      const randomCell = row[j];

      if (
        randomCell.piece &&
        randomCell.piece.color !== currentPlayer &&
        randomCell.piece.name !== PieceNames.PAWN &&
        (randomCell.piece.canMove(target) ||
          randomCell.piece.canProtect!(target))
      ) {
        count += 1;
      } else if (
        randomCell.piece &&
        randomCell.piece.color !== currentPlayer &&
        randomCell.piece.name === PieceNames.PAWN &&
        PawnMethods.isCellUnderPawnAttack(randomCell, target)
      ) {
        count += 1;
      }
    }
  }

  if (count === 0) {
    return false;
  } else {
    return true;
  }
};
