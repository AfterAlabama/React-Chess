import { Colors } from "../../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from "../../../assets/black-bishop.png";
import whiteLogo from "../../../assets/white-bishop.png";
import { PieceNames } from "../../../helpers/PieceNames";

export class Bishop extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.BISHOP;
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }

    return false;
  }

  public canProtect(target: Cell): boolean {
    let count: number = 1;

    const absY = Math.abs(this.cell.y - target.y);
    const absX = Math.abs(this.cell.x - target.x);

    if (absY !== absX) {
      return false;
    }

    const dy = this.cell.y < target.y ? 1 : -1;
    const dx = this.cell.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if (
        this.cell.board
          .getCells(this.cell.y + dy * i, this.cell.x + dx * i)
          .isEmpty() ||
        (!this.cell.board
          .getCells(this.cell.y + dy * i, this.cell.x + dx * i)
          .isEmpty() &&
          this.cell.board.getCells(this.cell.y + dy * i, this.cell.x + dx * i)
            .piece?.name === PieceNames.KING &&
          this.cell.board.getCells(this.cell.y + dy * i, this.cell.x + dx * i)
            .piece?.color !== this.color)
      ) {
        count += 1;
      }
    }

    if (count === absY) {
      return true;
    }

    return false;
  }
}
