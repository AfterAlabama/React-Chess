import { Colors } from "../../../helpers/Colors";
import { Board } from "../Board";
import { Cell } from "../Cell";

export function CheckForColor (
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