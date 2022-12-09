import { Colors } from "../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from '../../assets/black-pawn.png'
import whiteLogo from '../../assets/white-pawn.png'
import { PieceNames } from "../../helpers/PieceNames";


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

    const direction = this.color === Colors.BLACK ? 1 : -1;
    const firstStep = this.color === Colors.BLACK ? 2 : -2;

    if(
      //checks for a right vertical
      (this.cell.y === target.y)
      &&
      (  //moves only one or two cells ahead
        (target.x === this.cell.x + direction)
        ||
        (this.isFirstMove && target.x === this.cell.x + firstStep)
      )
      && //checks if target is empty
      (this.cell.board.getCells(target.y , target.x).isEmpty())
    ){
      return true
    }

    // pawn attacks
    if(
      target.x === this.cell.x + direction 
      && 
      ((target.y === this.cell.y + 1) || (target.y === this.cell.y - 1))
      &&
      (this.cell.isEnemy(target))){
        return true
      }
    return false
  }

  public movePiece(target: Cell): void {
    this.isFirstMove = false
  }
}