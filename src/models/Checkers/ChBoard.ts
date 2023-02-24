import { Colors } from "../../helpers/Colors";
import { CheckerAttack } from "./BoardMethods/CheckerAttack";
import { ChCell } from "./ChCell";
import { Checker } from "./Pieces/Checker";

export class ChBoard {
  cells: ChCell[][] = [];

  public initCheckersCells(){
    for (let i = 0; i < 8; i++) {
      const row: ChCell[] = [];
      for (let j = 0; j < 8; j++) {
        if((i + j) % 2 !== 0){
          row.push(new ChCell(i, j, Colors.BLACK, this, null))
        } else {
          row.push(new ChCell(i, j, Colors.WHITE, this, null))
        }
        
      }
      this.cells.push(row)
    }
  };

  public highlightChCells(selectedChCell: ChCell | null){
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];

        CheckerAttack(selectedChCell, target, this)
        
        target.available = !!selectedChCell?.piece?.canMove(target)
      }
    }
  };

  public getCopyBoard(){
    const newBoard = new ChBoard();
    newBoard.cells = this.cells;
    return newBoard
  };

  private addCheckers(){
    for (let i = 0; i < this.cells.length; i++) {
      new Checker(Colors.BLACK, this.getCells(i, 0));
      new Checker(Colors.BLACK, this.getCells(i, 1));
      new Checker(Colors.BLACK, this.getCells(i, 2));

      new Checker(Colors.WHITE, this.getCells(i, 5));
      new Checker(Colors.WHITE, this.getCells(i, 6));
      new Checker(Colors.WHITE, this.getCells(i, 7));
    }
  };

  public getCells(y: number, x: number) {
    return this.cells[x][y];
  };

  public addChPieces(){
    this.addCheckers()
  }
}
