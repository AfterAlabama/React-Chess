import { Colors } from "../../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from '../../../assets/black-queen.png'
import whiteLogo from '../../../assets/white-queen.png'
import { PieceNames } from "../../../helpers/PieceNames";


export class Queen extends Piece {
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.QUEEN
  }

  public canMove(target: Cell){
    if(!super.canMove(target)){
      return false
    }

    if(this.cell.isEmptyVertical(target)){
      return true
    }
    if(this.cell.isEmptyHorizontal(target)){
      return true
    }
    if(this.cell.isEmptyDiagonal(target)){
      return true
    }
    return false
  }
}