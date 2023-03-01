import { ChCell } from "../ChCell";

export class IsEmpty {
  static Cell(cell: ChCell){
    return cell.piece === null
  }

  static Vertical(
    cell: ChCell,
    target: ChCell
  ){
    
    const absY = Math.abs(cell.y - target.y);
    const absX = Math.abs(cell.x - target.x);

    if (absY !== absX) {
      return false;
    }

    const dy = cell.y < target.y ? 1 : -1;
    const dx = cell.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if (!IsEmpty.Cell(cell.board.getCells(cell.y + dy * i, cell.x + dx * i))) {
        return false;
      }
    }
    return true 
  }
}