import { Colors } from "../../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from "../../../assets/black-queen.png";
import whiteLogo from "../../../assets/white-queen.png";
import { PieceNames } from "../../../helpers/PieceNames";

export class Queen extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.QUEEN;
  }

  public canMove(target: Cell) {
    if (!super.canMove(target)) {
      return false;
    }

    if (this.cell.isEmptyVertical(target)) {
      return true;
    }

    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }

    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }

    return false;
  }

  public canProtect(target: Cell) {
    let countVertical = 1;
    let countHorizontal = 1;
    let countDiagonal = 1;

    const minVertical = Math.min(this.cell.x, target.x);
    const maxVertical = Math.max(this.cell.x, target.x);

    const minHorizontal = Math.min(this.cell.y, target.y);
    const maxHorizontal = Math.max(this.cell.y, target.y);

    const absY = Math.abs(this.cell.y - target.y);
    const absX = Math.abs(this.cell.x - target.x);

    const dy = this.cell.y < target.y ? 1 : -1;
    const dx = this.cell.x < target.x ? 1 : -1;

    for (let x = minVertical + 1; x < maxVertical; x++) {
      if (
        this.cell.board.getCells(this.cell.y, x).isEmpty() ||
        (!this.cell.board.getCells(this.cell.y, x).isEmpty() &&
          this.cell.board.getCells(this.cell.y, x).piece?.name ===
            PieceNames.KING &&
          this.cell.board.getCells(this.cell.y, x).piece?.color !== this.color)
      ) {
        countVertical += 1;
      }
    }

    for (let y = minHorizontal + 1; y < maxHorizontal; y++) {
      if (
        this.cell.board.getCells(y, this.cell.x).isEmpty() ||
        (!this.cell.board.getCells(y, this.cell.x).isEmpty() &&
          this.cell.board.getCells(y, this.cell.x).piece?.name ===
            PieceNames.KING &&
          this.cell.board.getCells(y, this.cell.x).piece?.color !== this.color)
      ) {
        countHorizontal += 1;
      }
    }

    for (let i = 1; i < absY; i++) {
      if (
        absX === absY &&
        (this.cell.board
          .getCells(this.cell.y + dy * i, this.cell.x + dx * i)
          .isEmpty() ||
          (!this.cell.board
            .getCells(this.cell.y + dy * i, this.cell.x + dx * i)
            .isEmpty() &&
            this.cell.board.getCells(this.cell.y + dy * i, this.cell.x + dx * i)
              .piece?.name === PieceNames.KING &&
            this.cell.board.getCells(this.cell.y + dy * i, this.cell.x + dx * i)
              .piece?.color !== this.color))
      ) {
        countDiagonal += 1;
      }
    }

    if (
      this.cell.y === target.y &&
      countVertical === Math.abs(target.x - this.cell.x)
    ) {
      return true;
    }

    if (
      this.cell.x === target.x &&
      countHorizontal === Math.abs(target.y - this.cell.y)
    ) {
      return true;
    }

    if (absY === absX && countDiagonal === absY) {
      return true;
    }

    return false;
  }
}
