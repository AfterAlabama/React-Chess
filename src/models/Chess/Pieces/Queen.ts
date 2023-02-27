import { Colors } from "../../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from "../../../assets/black-queen.png";
import whiteLogo from "../../../assets/white-queen.png";
import { PieceNames } from "../../../helpers/PieceNames";
import { IsEmpty } from "../CellMethods/IsEmpty";
import { IsProtected } from "../CellMethods/IsProtected";

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

    if (IsEmpty.Vertical(this.cell, target)) {
      return true;
    }

    if (IsEmpty.Horizontal(this.cell, target)) {
      return true;
    }

    if (IsEmpty.Diagonal(this.cell, target)) {
      return true;
    }

    return false;
  }

  public canProtect(target: Cell) {
    if (IsProtected.Vertical(this, target)) {
      return true;
    }

    if (IsProtected.Horizontal(this, target)) {
      return true;
    }

    if (IsProtected.Diagonal(this, target)) {
      return true;
    }

    return false;
  }
}
