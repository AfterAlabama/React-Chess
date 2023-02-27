import { Colors } from "../../helpers/Colors";
import { ChCell } from "./ChCell";
import { Checker } from "./Pieces/Checker";

export class ChBoard {
  cells: ChCell[][] = [];

  public initCheckersCells() {
    for (let i = 0; i < 8; i++) {
      const row: ChCell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new ChCell(i, j, Colors.BLACK, this, null));
        } else {
          row.push(new ChCell(i, j, Colors.WHITE, this, null));
        }
      }
      this.cells.push(row);
    }
  }

  public highlightChCells(selectedChCell: ChCell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];

        target.available = !!selectedChCell?.piece?.canMove(target);
      }
    }
  }

  public getCopyBoard() {
    const newBoard = new ChBoard();
    newBoard.cells = this.cells;
    return newBoard;
  }

  private addCheckers() {
    for (let i = 0; i < 3; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        if ((i + j) % 2 !== 0) {
          new Checker(Colors.BLACK, this.getCells(j, i));
        }
      }
    }
    for (let i = 5; i < 8; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        if ((i + j) % 2 !== 0) {
          new Checker(Colors.WHITE, this.getCells(j, i));
        }
      }
    }
  }

  public getCells(y: number, x: number) {
    return this.cells[x][y];
  }

  public addChPieces() {
    this.addCheckers();
  }
}
