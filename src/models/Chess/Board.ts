import { CheckForColor } from "./BoardMethods/CheckForColor";
import { Colors } from "../../helpers/Colors";
import { PieceNames } from "../../helpers/PieceNames";
import { FindPiece } from "./BoardMethods/FindPiece";
import { Highlight } from "./BoardMethods/Highlight";
import { Cell } from "./Cell";
import { BlockCheck } from "./CellMethods/BlockCheck";
import { Bishop } from "./Pieces/Bishop";
import { King } from "./Pieces/King";
import { Knight } from "./Pieces/Knight";
import { Pawn } from "./Pieces/Pawn";
import { Piece } from "./Pieces/Piece";
import { Queen } from "./Pieces/Queen";
import { Rook } from "./Pieces/Rook";

export class Board {
  cells: Cell[][] = [];
  lostBlackPieces: Piece[] = [];
  lostWhitePieces: Piece[] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(i, j, Colors.BLACK, this, null));
        } else {
          row.push(new Cell(i, j, Colors.WHITE, this, null));
        }
      };
      this.cells.push(row);
    }
  };


  public highlightCells(selectedCell: Cell | null, currentColor: Colors) {

    for (let i = 0; i < this.cells.length; i++) {
      const row: Cell[] = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];

        Highlight.highlightCastling(selectedCell, currentColor, this);

        if(!Highlight.pieceStandingInCheck(selectedCell, target, this)){

          if(!Highlight.pieceMovingInCheck(selectedCell, this, target)){

            if(!Highlight.kingEscaping(selectedCell, this, target, currentColor)){

              target.available = !!selectedCell?.piece?.canMove(target);
            }
          }        
        }   
      }
    }
  };

  public getCopyBoard() {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostBlackPieces = this.lostBlackPieces;
    newBoard.lostWhitePieces = this.lostWhitePieces;
    return newBoard;
  };



  public isKingUnderAttack() {
    let { blackKing, whiteKing } = FindPiece.findKings(this);

    let whiteKingCheck: boolean = false;
    let blackKingCheck: boolean = false;
    let blackAttacker;
    let whiteAttacker;


    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];

        if (target.piece && target.piece.attacksKing(blackKing)) {
          blackKingCheck = true;
          blackAttacker = target;
          blackKing.color = Colors.UNDERATTACK;
        };

        if (target.piece && target.piece.attacksKing(whiteKing)) {
          whiteKingCheck = true;
          whiteAttacker = target;
          whiteKing.color = Colors.UNDERATTACK;
        };

        if(!whiteKingCheck){
          CheckForColor(this, whiteKing)
        };
        if(!blackKingCheck){
          CheckForColor(this, blackKing)
        }
      }
    }
    return { blackKingCheck, whiteKingCheck, blackAttacker, whiteAttacker };
  };



  public isCellUnderAttack(target: Cell, currentPlayer: Colors | undefined) {
    let count: number = 0;
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const randomCell = row[j];

        if (
          randomCell.piece &&
          randomCell.piece.color !== currentPlayer &&
          randomCell.piece.name !== PieceNames.PAWN &&
          (randomCell.piece.canMove(target) ||
            randomCell.piece.canProtect!(target))
        ) {
          count += 1;
        } else if (
          randomCell.piece &&
          randomCell.piece.color !== currentPlayer &&
          randomCell.piece.name === PieceNames.PAWN &&
          randomCell.isPawnCellAttack(target)
        ) {
          count += 1;
        }
      }
    };

    if (count === 0) {
      return false;
    } else {
      return true;
    }
  };

  public Mate(currentColor: Colors) {
    let count = 0;
    const { blackKing, whiteKing } = FindPiece.findKings(this);

    const { whiteKingCheck, blackKingCheck } = this.isKingUnderAttack();

    if (whiteKingCheck || blackKingCheck) {
      for (let i = 0; i < this.cells.length; i++) {
        const row = this.cells[i];
        for (let j = 0; j < row.length; j++) {
          const target = row[j];

          for (let x = 0; x < this.cells.length; x++) {
            const row2 = this.cells[x];
            for (let z = 0; z < row2.length; z++) {
              const target2 = row2[z];

              if (
                (whiteKing.piece!.canMove(target) 
                &&
                !this.isCellUnderAttack(target, currentColor)
                ) 
                ||
                (target2.piece?.color === whiteKing.piece!.color 
                &&
                target2.piece?.canMove(target) 
                &&
                BlockCheck.doesCellBlockTheCheck(target, this, target2)
                ) 
                ||
                (blackKing.piece!.canMove(target) 
                &&
                !this.isCellUnderAttack(target, currentColor)
                ) 
                ||
                (target2.piece?.color === blackKing.piece!.color 
                &&
                target2.piece?.canMove(target) 
                &&
                BlockCheck.doesCellBlockTheCheck(target, this, target2)
                )
              ) {
                count += 1;
              }
            }
          }
        }
      };
      if (count > 0) {
        return false;
      } else {
        return true;
      }
    }
  };

  private addKings() {
    new King(Colors.BLACK, this.getCells(4, 0));
    new King(Colors.WHITE, this.getCells(4, 7));
  };

  private addQueens() {
    new Queen(Colors.BLACK, this.getCells(3, 0));
    new Queen(Colors.WHITE, this.getCells(3, 7));
  };

  private addRooks() {
    new Rook(Colors.BLACK, this.getCells(0, 0));
    new Rook(Colors.BLACK, this.getCells(7, 0));
    new Rook(Colors.WHITE, this.getCells(0, 7));
    new Rook(Colors.WHITE, this.getCells(7, 7));
  };

  private addBishops() {
    new Bishop(Colors.BLACK, this.getCells(2, 0));
    new Bishop(Colors.BLACK, this.getCells(5, 0));
    new Bishop(Colors.WHITE, this.getCells(2, 7));
    new Bishop(Colors.WHITE, this.getCells(5, 7));
  };

  private addKnights() {
    new Knight(Colors.BLACK, this.getCells(1, 0));
    new Knight(Colors.BLACK, this.getCells(6, 0));
    new Knight(Colors.WHITE, this.getCells(1, 7));
    new Knight(Colors.WHITE, this.getCells(6, 7));
  };

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCells(i, 1));
      new Pawn(Colors.WHITE, this.getCells(i, 6));
    }
  };
  
  public getCells(y: number, x: number) {
    return this.cells[x][y];
  };

  public addPieces() {
    this.addKings();
    this.addQueens();
    this.addRooks();
    this.addBishops();
    this.addKnights();
    this.addPawns();
  }
}
