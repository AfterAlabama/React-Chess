import { Colors } from "../../../helpers/Colors";
import { PieceNames } from "../../../helpers/PieceNames";
import { ChCell } from "../ChCell";
import { ChPiece } from "./ChPiece";
import blackLogo from '../../../assets/black attempt 1.png'
import whiteLogo from '../../../assets/white atempt 1.png'
import { CheckerAttack } from "../BoardMethods/CheckerAttack";

export class Checker extends ChPiece {
  constructor(color: Colors, cell: ChCell){
    super(color, cell);
    this.name = PieceNames.CH_PIECE;
    this.logo = this.color === Colors.BLACK ? blackLogo : whiteLogo
  };

  public canMove(target: ChCell): boolean{
    if (!super.canMove(target)){
      return false
    };
    //white checker
    if(
      target.color === Colors.BLACK &&
      this.color === Colors.WHITE && 
      this.cell.x === target.x + 1 &&
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
      ){
        return true
      };

    //black checker  
    if(
      target.color === Colors.BLACK &&
      this.color === Colors.BLACK && 
      this.cell.x === target.x - 1 &&
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
      ){
        return true
      };
      
      if(target.available){
        return true
      }

    return false
  }
}