import { Colors } from "../../../helpers/Colors";
import { PieceNames } from "../../../helpers/PieceNames";
import logo from '../../../assets/black-bishop.png'
import { Cell } from "../Cell";

export class Piece {
  color: Colors;
  name: PieceNames;
  logo : typeof logo | null;
  cell: Cell;
  isFirstStep: boolean = true

  constructor(color: Colors, cell: Cell){
    this.color = color;
    this.name = PieceNames.PIECE;
    this.cell = cell
    this.cell.piece = this
  }

  // Piece's ability to move to the cell
  public canMove(target: Cell){
    if(this.color === target.piece?.color){
      return false
    }
    return true
  }


  // checks if a piece already moved
  public movePiece(target: Cell){
    this.isFirstStep = false
  }
}