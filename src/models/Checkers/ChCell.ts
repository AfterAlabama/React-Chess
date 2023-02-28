import { Colors } from "../../helpers/Enums/Colors";
import { ChBoard } from "./ChBoard";
import { ChPiece } from "./Pieces/ChPiece";

export class ChCell {
  x: number;
  y: number;
  color: Colors;
  piece: ChPiece | null;
  board: ChBoard;
  available: boolean;
  id: number;

  constructor(
    x: number,
    y: number,
    color: Colors,
    board: ChBoard,
    piece: ChPiece | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.piece = piece;
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }

  public setPiece(piece: ChPiece) {
    this.piece = piece;
    this.piece.cell = this;
  }

  public movePiece(target: ChCell) {
    if (this.piece && this.piece.canMove(target)) {
      target.setPiece(this.piece);
      this.piece = null;
    }
  }
}
