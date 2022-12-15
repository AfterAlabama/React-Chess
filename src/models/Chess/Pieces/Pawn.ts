import { Colors } from "../../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from '../../../assets/black-pawn.png'
import whiteLogo from '../../../assets/white-pawn.png'
import { PieceNames } from "../../../helpers/PieceNames";


export class Pawn extends Piece {
  isFirstMove: boolean = true;

  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.PAWN
  }

  public canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false
    }

    if(this.cell.isPawnMove(target, this.isFirstMove)){
      return true
    }

    if(this.cell.isPawnAttack(target)){
      return true
    }

    return false
  }

  public movePiece(target: Cell): void {
    this.isFirstMove = false
  }
}