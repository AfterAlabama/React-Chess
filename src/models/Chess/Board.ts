import { Colors } from "../../helpers/Colors";
import { Cell } from "./Cell";
import { Bishop } from "./Pieces/Bishop";
import { King } from './Pieces/King';
import { Knight } from "./Pieces/Knight";
import { Pawn } from "./Pieces/Pawn";
import { Piece } from "./Pieces/Piece";
import { Queen } from "./Pieces/Queen";
import { Rook } from "./Pieces/Rook";


export class Board {
  cells: Cell[][] = [];
  lostBlackPieces: Piece[] = [];
  lostWhitePieces: Piece[] = [];

  // creates cells
  public initCells(){
    for (let i = 0; i < 8; i++) {
      const row : Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if((i + j) % 2 !== 0){
          row.push(new Cell(i, j, Colors.BLACK, this, null))
        } else {
          row.push(new Cell(i, j, Colors.WHITE, this, null))
        }       
      }
      this.cells.push(row)
    }
  }


  public highlightCells(selectedCell: Cell | null){
    for (let i = 0; i < this.cells.length; i++) {
      const row : Cell[] = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.piece?.canMove(target);
      }
    }
  }

  public getCopyBoard(){
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostBlackPieces = this.lostBlackPieces;
    newBoard.lostWhitePieces = this.lostWhitePieces;
    return newBoard
  }


  private addKings(){
    new King(Colors.BLACK, this.getCells(4, 0))
    new King(Colors.WHITE, this.getCells(4, 7))
  }

  private addQueens(){
    new Queen (Colors.BLACK, this.getCells(3, 0))
    new Queen (Colors.WHITE, this.getCells(3, 7))
  }

  private addRooks(){
    new Rook (Colors.BLACK, this.getCells(0, 0))
    new Rook (Colors.BLACK, this.getCells(7, 0))
    new Rook (Colors.WHITE, this.getCells(0, 7))
    new Rook (Colors.WHITE, this.getCells(7, 7))
  }

  private addBishops(){
    new Bishop (Colors.BLACK, this.getCells(2, 0))
    new Bishop (Colors.BLACK, this.getCells(5, 0))
    new Bishop (Colors.WHITE, this.getCells(2, 7))
    new Bishop (Colors.WHITE, this.getCells(5, 7))
  }

  private addKnights(){
    new Knight (Colors.BLACK, this.getCells(1, 0))
    new Knight (Colors.BLACK, this.getCells(6, 0))
    new Knight (Colors.WHITE, this.getCells(1, 7))
    new Knight (Colors.WHITE, this.getCells(6, 7))
  }

  private addPawns(){
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCells(i, 1))
      new Pawn(Colors.WHITE, this.getCells(i, 6))
    }
  }

  // returns the coordinates of a cell
  public getCells(x: number, y: number){
      return this.cells[y][x]
  }

  public addPieces(){
      this.addKings()
      this.addQueens()
      this.addRooks()
      this.addBishops()
      this.addKnights()
      this.addPawns()
  }
}