import { Colors } from "../../../helpers/Colors";
import { Board } from "../../../models/Chess/Board";
import { Cell } from "../../../models/Chess/Cell";

export function checkForColor (
  board: Board,
  king: Cell
){

  if(board.getCells(
    (king.y + 1) || (king.y - 1), 
    king.x
    ).color === Colors.BLACK){
      king.color = Colors.WHITE
  }

  if(board.getCells(
    (king.y + 1) || (king.y - 1), 
    king.x
    ).color === Colors.WHITE){
      king.color = Colors.BLACK
  };
}