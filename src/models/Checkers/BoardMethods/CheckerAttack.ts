import { Colors } from "../../../helpers/Colors";
import { ChBoard } from "../ChBoard";
import { ChCell } from "../ChCell";


export function CheckerAttack(
  selectedChCell: ChCell | null,
  target: ChCell,
  board: ChBoard
){
  //whiteChecker
  if(
    selectedChCell &&
    selectedChCell.piece &&
    selectedChCell.piece.color === Colors.WHITE &&
    selectedChCell.x !== 0
     ){
      if(
        board.getCells(selectedChCell.y + 2, selectedChCell.x - 2)
        &&
        board.getCells(selectedChCell.y + 1, selectedChCell.x - 1)
        &&
        board.getCells(selectedChCell.y + 1, selectedChCell.x - 1).piece 
        &&
        board.getCells(selectedChCell.y + 1, selectedChCell.x - 1).piece?.color !== selectedChCell.piece.color){
        let enemyCell = board.getCells(selectedChCell.y + 1, selectedChCell.x - 1);
        if(!board.getCells(enemyCell.y + 1, enemyCell.x - 1).piece){
        board.getCells(enemyCell.y + 1, enemyCell.x - 1).available = true;
        return true
      }
      }

      if(
        board.getCells(selectedChCell.y - 2, selectedChCell.x - 2)
        &&
        board.getCells(selectedChCell.y - 1, selectedChCell.x - 1)
        &&
        board.getCells(selectedChCell.y - 1, selectedChCell.x - 1).piece 
        &&
        board.getCells(selectedChCell.y - 1, selectedChCell.x - 1).piece?.color !== selectedChCell.piece.color){
        let enemyCell = board.getCells(selectedChCell.y - 1, selectedChCell.x - 1);
        if(!board.getCells(enemyCell.y - 1, enemyCell.x - 1).piece){
        board.getCells(enemyCell.y - 1, enemyCell.x - 1).available = true;
        return true
      }
      }
    };

    //black checker
  if(
    selectedChCell &&
    selectedChCell.piece &&
    selectedChCell.piece.color === Colors.BLACK &&
    selectedChCell.x !== 7
     ){
      if(
        board.getCells(selectedChCell.y + 2, selectedChCell.x + 2)
        &&
        board.getCells(selectedChCell.y + 1, selectedChCell.x + 1)
        &&
        board.getCells(selectedChCell.y + 1, selectedChCell.x + 1).piece 
        &&
        board.getCells(selectedChCell.y + 1, selectedChCell.x + 1).piece?.color !== selectedChCell.piece.color){
        let enemyCell = board.getCells(selectedChCell.y + 1, selectedChCell.x + 1);
        if(!board.getCells(enemyCell.y + 1, enemyCell.x + 1).piece){
        board.getCells(enemyCell.y + 1, enemyCell.x + 1).available = true;
        return true
      }
      }

      if(
        board.getCells(selectedChCell.y - 2, selectedChCell.x + 2)
        &&
        board.getCells(selectedChCell.y - 1, selectedChCell.x + 1)
        &&
        board.getCells(selectedChCell.y - 1, selectedChCell.x + 1).piece 
        &&
        board.getCells(selectedChCell.y - 1, selectedChCell.x + 1).piece?.color !== selectedChCell.piece.color){
        let enemyCell = board.getCells(selectedChCell.y - 1, selectedChCell.x + 1);
        if(!board.getCells(enemyCell.y - 1, enemyCell.x + 1).piece){
        board.getCells(enemyCell.y - 1, enemyCell.x + 1).available = true;
        return true
      }
      }
    }
  return false
}