import { Colors } from "../../../helpers/Enums/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from "../../../assets/black-knight.png";
import whiteLogo from "../../../assets/white-knight.png";
import { PieceNames } from "../../../helpers/Enums/PieceNames";
import { KnightMethods } from "../PieceMethods/KnightMethods";

export class Knight extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.KNIGHT;
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (KnightMethods.CanKnightMove(this, target)) {
      return true;
    }

    return false;
  }

  public canProtect(target: Cell) {
    if (KnightMethods.CanKnightProtect(this, target)) {
      return true;
    }

    return false;
  }
}
