import { Colors } from "../../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from "../../../assets/black-rook.png";
import whiteLogo from "../../../assets/white-rook.png";
import { PieceNames } from "../../../helpers/PieceNames";

export class Rook extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.ROOK;
  };

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    };

    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    };

    if (this.cell.isEmptyVertical(target)) {
      return true;
    };

    return false;
  };

  public canProtect(target: Cell){
    
    let countVertical = 1;
    let countHorizontal = 1;


    const minVertical = Math.min(this.cell.x, target.x);
    const maxVertical = Math.max(this.cell.x, target.x);

    const minHorizontal = Math.min(this.cell.y, target.y);
    const maxHorizontal = Math.max(this.cell.y, target.y);

    for (let x = minVertical + 1; x < maxVertical; x++) {
      if (
        (this.cell.board.getCells(this.cell.y, x).isEmpty()) ||
        (!this.cell.board.getCells(this.cell.y, x).isEmpty() && 
        this.cell.board.getCells(this.cell.y, x).piece?.name === PieceNames.KING &&
        this.cell.board.getCells(this.cell.y, x).piece?.color !== this.color)
        ) {
        countVertical += 1;
      }      
    };

    for (let y = minHorizontal + 1; y < maxHorizontal; y++) {
      if (
        (this.cell.board.getCells(y, this.cell.x).isEmpty()) ||
        (!this.cell.board.getCells(y, this.cell.x).isEmpty() && 
        this.cell.board.getCells(y, this.cell.x).piece?.name === PieceNames.KING &&
        this.cell.board.getCells(y, this.cell.x).piece?.color !== this.color)
        ) {
        countHorizontal += 1;
      }      
    };

    if(
      (this.cell.y === target.y && countVertical === Math.abs(target.x - this.cell.x))
 ){
      return true
    };

    if(
      (this.cell.x === target.x && countHorizontal === Math.abs(target.y - this.cell.y))
 ){
      return true
    };



    return false;
  }

  
  public movePiece(target: Cell): void {
    this.isFirstStep = false;
  }
}
