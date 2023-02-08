import { Colors } from "../../helpers/Colors";
import { ChCell } from "./ChCell";

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
  }
}