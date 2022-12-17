import { Colors } from "../../helpers/Colors";
import { PieceNames } from "../../helpers/PieceNames";
import { Board } from "./Board";
import { Piece } from "./Pieces/Piece";


export class Cell {
  x : number;
  y: number;
  color: Colors;
  piece: Piece | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(x:number, y:number, color: Colors, board: Board, piece: Piece | null){
    this.x = x;
    this.y = y;
    this.color = color;
    this.piece = piece;
    this.board = board;
    this.available = false;
    this.id = Math.random()
  }


  public isPawnMove(target: Cell, isFirstStep: boolean){

    const direction = this.piece?.color === Colors.BLACK ? 1 : -1;

    const firstStep = this.piece?.color === Colors.BLACK ? 2 : -2;

    if(
      //checks for a right vertical
      (this.y === target.y)
      &&
      (  //moves only one or two cells ahead
        (target.x === this.x + direction)
        ||
        (isFirstStep && target.x === this.x + firstStep)
      )
      && 
      //checks if target is empty
      (this.board.getCells(target.y , target.x).isEmpty())
    ){
      return true
    }
    return false
  }

  public isPawnAttack(target: Cell){

    const direction = this.piece?.color === Colors.BLACK ? 1 : -1;

    if(
      target.x === this.x + direction 
      && 
      ((target.y === this.y + 1) || (target.y === this.y - 1))
      &&
      (this.isEnemy(target))){
        return true
      }
  }
  

  public isEmpty(){
    return this.piece === null
  }

  public isEnemy(target: Cell){
    if(target.piece && this.piece?.color !== target.piece.color ){
      return true
    }
    return false
  }

  public isEmptyVertical(target: Cell){
    if(this.y !== target.y){
      return false
    }
    const min = Math.min(this.x , target.x);
    const max = Math.max(this.x , target.x);

    for (let x = min + 1; x < max; x++) {
      if(!this.board.getCells(this.y, x).isEmpty()){
        return false
      } 
    }
    return true
  }

  public isEmptyHorizontal(target: Cell){
    if(this.x !== target.x){
      return false
    }
    const min = Math.min(this.y , target.y);
    const max = Math.max(this.y , target.y);

    for (let y = min + 1; y < max; y++) {
      if(!this.board.getCells(y, this.x).isEmpty()){
        return false
      } 
    }
    return true
  }

  public isEmptyDiagonal(target: Cell){
    const absY = Math.abs(this.y - target.y);
    const absX = Math.abs(this.x - target.x);

    if(absY !== absX){
      return false
    }

    const dy = this.y < target.y ? 1 : -1
    const dx = this.x < target.x ? 1 : -1

    for (let i = 1; i < absY; i++) {
      if(!this.board.getCells(this.y + dy * i, this.x + dx * i).isEmpty()){
        return false
      }
    }

    return true
  }





  public setPiece(piece: Piece){
    this.piece = piece;
    this.piece.cell = this;
  }

  addLostPiece(piece: Piece){
    if(piece.color === Colors.BLACK){
      this.board.lostBlackPieces.push(piece)
    }
    if(piece.color === Colors.WHITE){
      this.board.lostWhitePieces.push(piece)
    }
  }

  // Moves a piece
  movePiece(target: Cell) {

    if(
      this.piece && this.piece.name === PieceNames.PAWN 
      && 
      this.piece.canMove(this.board.getCells(this.y + 1, this.x - 1)) 
      && 
      this.board.getCells(this.y + 1, this.x - 1).isEmpty()){

      this.board.getCells(this.y + 1, this.x - 1).setPiece(this.piece)
      this.piece = null;
      this.addLostPiece(this.board.getCells(this.y + 1, this.x).piece!);
      this.board.getCells(this.y + 1, this.x).piece = null
    }

    if (this.piece && this.piece?.canMove(target)) {
      this.piece.movePiece(target);
      if (target.piece) {
        this.addLostPiece(target.piece);
      }
      target.setPiece(this.piece);
      this.piece = null;
    }

   }
}