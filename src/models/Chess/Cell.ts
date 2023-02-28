import { Colors } from "../../helpers/Enums/Colors";
import { Board } from "./Board";
import { PawnMethods } from "./PieceMethods/PawnMethods";
import { Piece } from "./Pieces/Piece";

export class Cell {
  x: number;
  y: number;
  color: Colors;
  piece: Piece | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(
    x: number,
    y: number,
    color: Colors,
    board: Board,
    piece: Piece | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.piece = piece;
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }

  public isEnemy(target: Cell) {
    if (target.piece && this.piece?.color !== target.piece.color) {
      return true;
    }
    return false;
  }

  public setPiece(piece: Piece) {
    this.piece = piece;
    this.piece.cell = this;
  }

  addLostPiece(piece: Piece) {
    if (piece.color === Colors.BLACK) {
      this.board.lostBlackPieces.push(piece);
    }

    if (piece.color === Colors.WHITE) {
      this.board.lostWhitePieces.push(piece);
    }
  }

  movePiece(target: Cell) {
    PawnMethods.PawnTakesEnPassant(this, target);

    //ordinary moves
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
