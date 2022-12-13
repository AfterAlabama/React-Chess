import { Colors } from "../../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from '../../../assets/black-king.png'
import whiteLogo from '../../../assets/white-king.png'
import { PieceNames } from "../../../helpers/PieceNames";


export class King extends Piece {
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.KING
  }

  public canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false
    }

    if(
      (
        (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) 
        || 
        (target.x === this.cell.x)
        ) 
        && 
        (
          (target.y === this.cell.y + 1 ||
            target.y === this.cell.y - 1)
          ||
          (target.y === this.cell.y))){
      return true
    }

    return false
  }
}