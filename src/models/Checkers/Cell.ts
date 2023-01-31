import { Colors } from "../../helpers/Colors";
import { Board } from "./Board";
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
}