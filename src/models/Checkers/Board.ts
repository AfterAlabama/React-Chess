import { Colors } from "../../helpers/Colors";
import { Cell } from "./Cell";

export class Board {
  cells: Cell[][] = [];

  public initCheckersCells(){
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if((i + j) % 2 !== 0){
          row.push(new Cell(i, j, Colors.BLACK, this, null))
        } else {
          row.push(new Cell(i, j, Colors.WHITE, this, null))
        }
        
      }
      this.cells.push(row)
    }
  }
}