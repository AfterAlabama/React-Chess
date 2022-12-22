import { Colors } from "../../helpers/Colors";
import { PieceNames } from "../../helpers/PieceNames";
import { Cell } from "./Cell";
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
      }
      this.cells.push(row);
    }
  };

  private highlightCastling(selectedCell: Cell | null){

    const { blackKing, whiteKing } = this.findKings();

    const { leftBlackRook, leftWhiteRook, rightBlackRook, rightWhiteRook } =
      this.findRooks();

    const { blackKingCheck, whiteKingCheck } = this.isKingUnderAttack();

     //left white castling
     if (
      whiteKing.x === leftWhiteRook.x &&
      !whiteKingCheck &&
      whiteKing.piece?.isFirstStep &&
      leftWhiteRook.piece?.isFirstStep &&
      this.getCells(1, 7).isEmpty() &&
      this.getCells(2, 7).isEmpty() &&
      this.getCells(3, 7).isEmpty()
    ) {
      if (selectedCell === whiteKing) {
        this.getCells(2, 7).available = true;
      }
    }

    //right white castling
    if (
      whiteKing.x === rightWhiteRook.x &&
      !whiteKingCheck &&
      whiteKing.piece?.isFirstStep &&
      rightWhiteRook.piece?.isFirstStep &&
      this.getCells(6, 7).isEmpty() &&
      this.getCells(5, 7).isEmpty()
    ) {
      if (selectedCell === whiteKing) {
        this.getCells(6, 7).available = true;
      }
    }

    //left black castling
    if (
      blackKing.x === leftBlackRook.x &&
      !blackKingCheck &&
      blackKing.piece?.isFirstStep &&
      leftBlackRook.piece?.isFirstStep &&
      this.getCells(1, 0).isEmpty() &&
      this.getCells(2, 0).isEmpty() &&
      this.getCells(3, 0).isEmpty()
    ) {
      if (selectedCell === blackKing) {
        this.getCells(2, 0).available = true;
      }
    }

    //right black castling
    if (
      blackKing.x === rightBlackRook.x &&
      !blackKingCheck &&
      blackKing.piece?.isFirstStep &&
      rightBlackRook.piece?.isFirstStep &&
      this.getCells(5, 0).isEmpty() &&
      this.getCells(6, 0).isEmpty()
    ) {
      if (selectedCell === blackKing) {
        this.getCells(6, 0).available = true;
      }
    }

  };



  public highlightCells(selectedCell: Cell | null, color: Colors | undefined) {

    

    for (let i = 0; i < this.cells.length; i++) {
      const row: Cell[] = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];

        this.highlightCastling(selectedCell);
       
        target.available = !!selectedCell?.piece?.canMove(target);
      }
    }
  }

  public getCopyBoard() {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostBlackPieces = this.lostBlackPieces;
    newBoard.lostWhitePieces = this.lostWhitePieces;
    return newBoard;
  }

  //looks for kings
  public findKings() {
    let blackKing = new Cell(0, 0, Colors.BLACK, this, null);

    let whiteKing = new Cell(0, 0, Colors.WHITE, this, null);

    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if (
          target.piece?.name === PieceNames.KING &&
          target.piece.color === Colors.BLACK
        ) {
          blackKing = target;
        }
        if (
          target.piece?.name === PieceNames.KING &&
          target.piece.color === Colors.WHITE
        ) {
          whiteKing = target;
        }
      }
    }
    return { whiteKing, blackKing };
  }

  public findRooks() {
    let leftBlackRook = new Cell(0, 0, Colors.BLACK, this, null);

    let rightBlackRook = new Cell(0, 7, Colors.WHITE, this, null);

    let leftWhiteRook = new Cell(7, 0, Colors.BLACK, this, null);

    let rightWhiteRook = new Cell(7, 7, Colors.WHITE, this, null);

    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if (
          target.piece?.name === PieceNames.ROOK &&
          target.piece.color === Colors.BLACK &&
          target.x === 0 &&
          target.y === 0
        ) {
          leftBlackRook = target;
        }
        if (
          target.piece?.name === PieceNames.ROOK &&
          target.piece.color === Colors.BLACK &&
          target.y === 7 &&
          target.x === 0
        ) {
          rightBlackRook = target;
        }
        if (
          target.piece?.name === PieceNames.ROOK &&
          target.piece.color === Colors.WHITE &&
          target.y === 0 &&
          target.x === 7
        ) {
          leftWhiteRook = target;
        }
        if (
          target.piece?.name === PieceNames.ROOK &&
          target.piece.color === Colors.WHITE &&
          target.y === 7 &&
          target.x === 7
        ) {
          rightWhiteRook = target;
        }
      }
    }
    return { leftBlackRook, rightBlackRook, leftWhiteRook, rightWhiteRook };
  }

  public isKingUnderAttack() {
    let { blackKing, whiteKing } = this.findKings();

    let whiteKingCheck: boolean = false;
    let blackKingCheck: boolean = false;

    //Black King cell returns original color after check
    if (!blackKingCheck) {
      for (let i = 0; i < this.cells.length; i++) {
        const row = this.cells[i];
        for (let j = 0; j < row.length; j++) {
          const target = row[j];
          if (
            (target.x === blackKing.x + 1 && target.y === blackKing.y) ||
            (target.x === blackKing.x && target.y === blackKing.y + 1)
          ) {
            if (target.color === Colors.BLACK) {
              blackKing.color = Colors.WHITE;
            }
            if (target.color === Colors.WHITE) {
              blackKing.color = Colors.BLACK;
            }
          }
        }
      }
    }

    //for a white king
    if (!whiteKingCheck) {
      for (let i = 0; i < this.cells.length; i++) {
        const row = this.cells[i];
        for (let j = 0; j < row.length; j++) {
          const target = row[j];
          if (
            (target.x === whiteKing.x - 1 && target.y === whiteKing.y) ||
            (target.x === whiteKing.x && target.y === whiteKing.y - 1)
          ) {
            if (target.color === Colors.BLACK) {
              whiteKing.color = Colors.WHITE;
            }
            if (target.color === Colors.WHITE) {
              whiteKing.color = Colors.BLACK;
            }
          }
        }
      }
    }

    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];

        if (target.piece && target.piece.attacksKing(blackKing)) {
          blackKingCheck = true;
          blackKing.color = Colors.UNDERATTACK;
        }

        if (target.piece && target.piece.attacksKing(whiteKing)) {
          whiteKingCheck = true;
          whiteKing.color = Colors.UNDERATTACK;
        }
      }
    }
    return { blackKingCheck, whiteKingCheck };
  }

  public castling() {
    const { leftBlackRook, leftWhiteRook, rightBlackRook, rightWhiteRook } =
      this.findRooks();

    const { blackKing, whiteKing } = this.findKings();

    if (
      whiteKing.x === 7 &&
      whiteKing.y === 2 &&
      leftWhiteRook.piece?.isFirstStep
    ) {
      this.getCells(3, 7).setPiece(leftWhiteRook.piece!);
      leftWhiteRook.piece = null;
    }

    if (
      whiteKing.x === 7 &&
      whiteKing.y === 6 &&
      rightWhiteRook.piece?.isFirstStep
    ) {
      this.getCells(5, 7).setPiece(rightWhiteRook.piece!);
      rightWhiteRook.piece = null;
    }

    if (
      blackKing.x === 0 &&
      blackKing.y === 2 &&
      leftBlackRook.piece?.isFirstStep
    ) {
      this.getCells(3, 0).setPiece(leftBlackRook.piece!);
      leftBlackRook.piece = null;
    }

    if (
      blackKing.x === 0 &&
      blackKing.y === 6 &&
      rightBlackRook.piece?.isFirstStep
    ) {
      this.getCells(5, 0).setPiece(rightBlackRook.piece!);
      rightBlackRook.piece = null;
    }
  }

  private addKings() {
    new King(Colors.BLACK, this.getCells(4, 0));
    new King(Colors.WHITE, this.getCells(4, 7));
  }

  private addQueens() {
    new Queen(Colors.BLACK, this.getCells(3, 0));
    new Queen(Colors.WHITE, this.getCells(3, 7));
  }

  private addRooks() {
    new Rook(Colors.BLACK, this.getCells(0, 0));
    new Rook(Colors.BLACK, this.getCells(7, 0));
    new Rook(Colors.WHITE, this.getCells(0, 7));
    new Rook(Colors.WHITE, this.getCells(7, 7));
  }

  private addBishops() {
    new Bishop(Colors.BLACK, this.getCells(2, 0));
    new Bishop(Colors.BLACK, this.getCells(5, 0));
    new Bishop(Colors.WHITE, this.getCells(2, 7));
    new Bishop(Colors.WHITE, this.getCells(5, 7));
  }

  private addKnights() {
    new Knight(Colors.BLACK, this.getCells(1, 0));
    new Knight(Colors.BLACK, this.getCells(6, 0));
    new Knight(Colors.WHITE, this.getCells(1, 7));
    new Knight(Colors.WHITE, this.getCells(6, 7));
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCells(i, 1));
      new Pawn(Colors.WHITE, this.getCells(i, 6));
    }
  }

  // returns the coordinates of a cell
  public getCells(y: number, x: number) {
    return this.cells[x][y];
  }

  public addPieces() {
    this.addKings();
    this.addQueens();
    this.addRooks();
    this.addBishops();
    this.addKnights();
    this.addPawns();
  }
}
