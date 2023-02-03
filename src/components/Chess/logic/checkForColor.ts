import { Colors } from "../../../helpers/Colors";
import { Board } from "../../../models/Chess/Board";
import { Cell } from "../../../models/Chess/Cell";

export function checkForColor(
  board: Board,
  king: Cell
){
  for (let i = 0; i < board.cells.length; i++) {
    const row = board.cells[i];
    for (let j = 0; j < row.length; j++) {
      const target = row[j];
      if (
        (
          target.x === king.x + 1 
          && 
          target.y === king.y
        ) 
        ||
        (
          target.x === king.x 
          && 
          target.y === king.y + 1
        )
      ) {
        if (target.color === Colors.BLACK) {
          king.color = Colors.WHITE;
        }
        if (target.color === Colors.WHITE) {
          king.color = Colors.BLACK;
        }
      }
    }
  }
}