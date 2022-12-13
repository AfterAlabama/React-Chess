import { Colors } from '../../../helpers/Colors';
import { Cell } from '../Cell';
import { Piece } from './Piece';
import blackLogo from '../../../assets/black-bishop.png'
import whiteLogo from '../../../assets/white-bishop.png'
import { PieceNames } from "../../../helpers/PieceNames";


export class Bishop extends Piece {
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.BISHOP
  }

  public canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false
    }
    if(this.cell.isEmptyDiagonal(target)){
      return true
    }
    return false
  }
}