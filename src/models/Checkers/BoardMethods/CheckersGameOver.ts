import { Colors } from "../../../helpers/Enums/Colors";
import { ChBoard } from "../ChBoard";

export class CheckersGameOver {
  static HasWhiteLost(
    board: ChBoard
  ){
    let count = 0;
    for (let i = 0; i < board.cells.length; i++) {
      const row = board.cells[i]
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if(target.piece && target.piece.color === Colors.WHITE){
          count += 1
        }
      }
    }

    if(count === 0){
      return true
    }
    return false
  }

  static HasBlackLost(
    board: ChBoard
  ){
    let count = 0;

    for (let i = 0; i < board.cells.length; i++) {
      const row = board.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if(target.piece && target.piece.color === Colors.BLACK){
          count += 1
        }
      }
    }

    if(count === 0){
      return true
    }
    return false
  }
}