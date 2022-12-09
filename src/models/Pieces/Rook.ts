import { Colors } from "../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from '../../assets/black-rook.png'
import whiteLogo from '../../assets/white-rook.png'
import { PieceNames } from "../../helpers/PieceNames";


export class Rook extends Piece {
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.ROOK
  }

  public canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false
    }
    if(this.cell.isEmptyHorizontal(target)){
      return true
    }
    if(this.cell.isEmptyVertical(target)){
      return true
    }
    return false
  }
}