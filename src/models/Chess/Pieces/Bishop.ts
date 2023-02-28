import { Colors } from "../../../helpers/Enums/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from "../../../assets/black-bishop.png";
import whiteLogo from "../../../assets/white-bishop.png";
import { PieceNames } from "../../../helpers/Enums/PieceNames";
import { IsEmpty } from "../CellMethods/IsEmpty";
import { IsProtected } from "../CellMethods/IsProtected";

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

    if (IsEmpty.Diagonal(this.cell, target)) {
      return true;
    }

    return false;
  }

  public canProtect(target: Cell): boolean {
    if (IsProtected.Diagonal(this, target)) {
      return true;
    }

    return false;
  }
}
