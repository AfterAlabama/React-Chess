import { Colors } from "../../helpers/Colors";
import { PieceNames } from "../../helpers/PieceNames";
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

  public isPawnMove(target: Cell, isFirstStep: boolean) {
    const direction = this.piece?.color === Colors.BLACK ? 1 : -1;

    const firstStep = this.piece?.color === Colors.BLACK ? 2 : -2;

    if (
      this.y === target.y &&
      (target.x === this.x + direction ||
        (isFirstStep &&
          target.x === this.x + firstStep &&
          (this.piece?.color === Colors.BLACK
            ? this.board.getCells(target.y, target.x - 1).isEmpty()
            : this.board.getCells(target.y, target.x + 1).isEmpty()))) &&
      this.board.getCells(target.y, target.x).isEmpty()
    ) {
      return true;
    }
    return false;
  }

  public isPawnAttack(target: Cell) {
    const direction = this.piece?.color === Colors.BLACK ? 1 : -1;

    if (
      target.x === this.x + direction &&
      (target.y === this.y + 1 || target.y === this.y - 1) &&
      this.isEnemy(target)
    ) {
      return true;
    }
  }

  public isPawnCellAttack(target: Cell) {
    const direction = this.piece?.color === Colors.BLACK ? 1 : -1;

    if (
      target.x === this.x + direction &&
      (target.y === this.y + 1 || target.y === this.y - 1)
    ) {
      return true;
    }
  }

  public isEmpty() {
    return this.piece === null;
  }

  public isEnemy(target: Cell) {
    if (target.piece && this.piece?.color !== target.piece.color) {
      return true;
    }
    return false;
  }

  public isEmptyVertical(target: Cell) {
    if (this.y !== target.y) {
      return false;
    }

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCells(this.y, x).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  public isEmptyHorizontal(target: Cell) {
    if (this.x !== target.x) {
      return false;
    }

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCells(y, this.x).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  public isEmptyDiagonal(target: Cell) {
    const absY = Math.abs(this.y - target.y);
    const absX = Math.abs(this.x - target.x);

    if (absY !== absX) {
      return false;
    }

    const dy = this.y < target.y ? 1 : -1;
    const dx = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if (!this.board.getCells(this.y + dy * i, this.x + dx * i).isEmpty()) {
        return false;
      }
    }

    return true;
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

  public doesPieceBlockTheCheck(target: Cell) {
    const { blackKing, whiteKing } = this.board.findKings();

    for (let i = 0; i < this.board.cells.length; i++) {
      const row = this.board.cells[i];
      for (let j = 0; j < row.length; j++) {
        const randomCell = row[j];

        //black bishop
        if (
          randomCell.piece &&
          randomCell.piece.name === PieceNames.BISHOP &&
          randomCell.piece.color !== whiteKing.piece!.color
        ) {
          const absX = Math.abs(whiteKing.x - randomCell.x);

          const absY = Math.abs(whiteKing.y - randomCell.y);

          const dx = randomCell.x < whiteKing.x ? 1 : -1;

          const dy = randomCell.y < whiteKing.y ? 1 : -1;

          if (absX === absY && randomCell.piece.canMove(this)) {
            for (let z = 1; z < absY; z++) {
              if (
                this ===
                  this.board.getCells(
                    randomCell.y + dy * z,
                    randomCell.x + dx * z
                  ) &&
                target !== randomCell
              ) {
                return true;
              }

              if (
                target ===
                this.board.getCells(
                  randomCell.y + dy * z,
                  randomCell.x + dx * z
                )
              ) {
                return false;
              }
            }
          }
        }

        //white bishop
        if (
          randomCell.piece &&
          randomCell.piece.name === PieceNames.BISHOP &&
          randomCell.piece.color !== blackKing.piece!.color
        ) {
          const absX = Math.abs(blackKing.x - randomCell.x);

          const absY = Math.abs(blackKing.y - randomCell.y);

          const dx = randomCell.x < blackKing.x ? 1 : -1;

          const dy = randomCell.y < blackKing.y ? 1 : -1;

          if (absX === absY && randomCell.piece.canMove(this)) {
            for (let z = 1; z < absY; z++) {
              if (
                target ===
                this.board.getCells(
                  randomCell.y + dy * z,
                  randomCell.x + dx * z
                )
              ) {
                return false;
              }

              if (
                this ===
                  this.board.getCells(
                    randomCell.y + dy * z,
                    randomCell.x + dx * z
                  ) &&
                target !== randomCell
              ) {
                return true;
              }
            }
          }
        }

        //black rook
        if (
          randomCell.piece &&
          randomCell.piece.name === PieceNames.ROOK &&
          randomCell.piece.color !== whiteKing.piece!.color
        ) {
          if (whiteKing.y === randomCell.y) {
            const min = Math.min(randomCell.x, whiteKing.x);

            const max = Math.max(randomCell.x, whiteKing.x);

            for (let x = min + 1; x < max; x++) {
              if (randomCell.piece.canMove(this)) {
                if (this === this.board.getCells(randomCell.y, x)) {
                  return true;
                }

                if (
                  target === randomCell ||
                  target === this.board.getCells(randomCell.y, x)
                ) {
                  return false;
                }
              }
            }
          }

          if (whiteKing.x === randomCell.x) {
            const min1 = Math.min(whiteKing.y, randomCell.y);

            const max1 = Math.max(whiteKing.y, randomCell.y);

            for (let y = min1 + 1; y < max1; y++) {
              if (randomCell.piece.canMove(this)) {
                if (
                  target === this.board.getCells(y, randomCell.x) ||
                  target === randomCell
                ) {
                  return false;
                }

                if (this === this.board.getCells(y, randomCell.x)) {
                  return true;
                }
              }
            }
          }
        }

        //black queen
        if (
          randomCell.piece &&
          randomCell.piece.name === PieceNames.QUEEN &&
          randomCell.piece.color !== whiteKing.piece!.color
        ) {
          const absX = Math.abs(whiteKing.x - randomCell.x);

          const absY = Math.abs(whiteKing.y - randomCell.y);

          const dx = randomCell.x < whiteKing.x ? 1 : -1;

          const dy = randomCell.y < whiteKing.y ? 1 : -1;

          if (absX === absY && randomCell.piece.canMove(this)) {
            for (let z = 1; z < absY; z++) {
              if (
                this ===
                  this.board.getCells(
                    randomCell.y + dy * z,
                    randomCell.x + dx * z
                  ) &&
                target !== randomCell
              ) {
                return true;
              }

              if (
                target ===
                this.board.getCells(
                  randomCell.y + dy * z,
                  randomCell.x + dx * z
                )
              ) {
                return false;
              }
            }
          }

          if (whiteKing.y === randomCell.y) {
            const min = Math.min(randomCell.x, whiteKing.x);

            const max = Math.max(randomCell.x, whiteKing.x);

            for (let x = min + 1; x < max; x++) {
              if (randomCell.piece.canMove(this)) {
                if (this === this.board.getCells(randomCell.y, x)) {
                  return true;
                }

                if (
                  target === randomCell ||
                  target === this.board.getCells(randomCell.y, x)
                ) {
                  return false;
                }
              }
            }
          }

          if (whiteKing.x === randomCell.x) {
            const min1 = Math.min(whiteKing.y, randomCell.y);

            const max1 = Math.max(whiteKing.y, randomCell.y);

            for (let y = min1 + 1; y < max1; y++) {
              if (randomCell.piece.canMove(this)) {
                if (
                  target === this.board.getCells(y, randomCell.x) ||
                  target === randomCell
                ) {
                  return false;
                }

                if (this === this.board.getCells(y, randomCell.x)) {
                  return true;
                }
              }
            }
          }
        }

        //white queen
        if (
          randomCell.piece &&
          randomCell.piece.name === PieceNames.QUEEN &&
          randomCell.piece.color !== blackKing.piece!.color
        ) {
          const absX = Math.abs(blackKing.x - randomCell.x);

          const absY = Math.abs(blackKing.y - randomCell.y);

          const dx = randomCell.x < blackKing.x ? 1 : -1;

          const dy = randomCell.y < blackKing.y ? 1 : -1;

          if (absX === absY && randomCell.piece.canMove(this)) {
            for (let z = 1; z < absY; z++) {
              if (
                this ===
                  this.board.getCells(
                    randomCell.y + dy * z,
                    randomCell.x + dx * z
                  ) &&
                target !== randomCell
              ) {
                return true;
              }

              if (
                target ===
                this.board.getCells(
                  randomCell.y + dy * z,
                  randomCell.x + dx * z
                )
              ) {
                return false;
              }
            }
          }

          if (blackKing.y === randomCell.y) {
            const min = Math.min(randomCell.x, blackKing.x);

            const max = Math.max(randomCell.x, blackKing.x);

            for (let x = min + 1; x < max; x++) {
              if (randomCell.piece.canMove(this)) {
                if (this === this.board.getCells(randomCell.y, x)) {
                  return true;
                }

                if (
                  target === randomCell ||
                  target === this.board.getCells(randomCell.y, x)
                ) {
                  return false;
                }
              }
            }
          }

          if (blackKing.x === randomCell.x) {
            const min1 = Math.min(blackKing.y, randomCell.y);

            const max1 = Math.max(blackKing.y, randomCell.y);

            for (let y = min1 + 1; y < max1; y++) {
              if (randomCell.piece.canMove(this)) {
                if (
                  target === this.board.getCells(y, randomCell.x) ||
                  target === randomCell
                ) {
                  return false;
                }

                if (this === this.board.getCells(y, randomCell.x)) {
                  return true;
                }
              }
            }
          }
        }
      }
    }
    return false;
  }

  public doesCellBlockTheCheck(target: Cell) {
    const { blackKing, whiteKing } = this.board.findKings();

    const { blackAttacker, whiteAttacker } = this.board.isKingUnderAttack();

    for (let i = 0; i < this.board.cells.length; i++) {
      const row = this.board.cells[i];
      for (let j = 0; j < row.length; j++) {
        const randomCell = row[j];
        if (
          target === whiteAttacker &&
          randomCell !== whiteKing &&
          randomCell.piece?.canMove(target)
        ) {
          return true;
        }
        if (
          target === blackAttacker &&
          randomCell !== blackKing &&
          randomCell.piece?.canMove(target)
        ) {
          return true;
        }
      }
    }

    // if (target === whiteAttacker || target === blackAttacker) {
    //   return true;
    // }

    if (whiteAttacker?.piece?.name === PieceNames.BISHOP) {
      //black bishop
      const absY = Math.abs(whiteKing.y - whiteAttacker.y);
      const absX = Math.abs(whiteKing.x - whiteAttacker.x);

      if (absX !== absY) {
        return false;
      }

      const dy = whiteAttacker.y < whiteKing.y ? 1 : -1;
      const dx = whiteAttacker.x < whiteKing.x ? 1 : -1;

      for (let i = 1; i < absY; i++) {
        if (
          target ===
          this.board.getCells(
            whiteAttacker.y + dy * i,
            whiteAttacker.x + dx * i
          )
        ) {
          return true;
        }
      }
    }
    //white bishop
    if (blackAttacker?.piece?.name === PieceNames.BISHOP) {
      const absY = Math.abs(blackKing.y - blackAttacker.y);
      const absX = Math.abs(blackKing.x - blackAttacker.x);

      if (absX !== absY) {
        return false;
      }

      const dy = blackAttacker.y < blackKing.y ? 1 : -1;
      const dx = blackAttacker.x < blackKing.x ? 1 : -1;

      for (let i = 1; i < absY; i++) {
        if (
          this.piece?.canMove(target) &&
          target ===
            this.board.getCells(
              blackAttacker.y + dy * i,
              blackAttacker.x + dx * i
            )
        ) {
          return true;
        }
      }
    }
    //black rook
    if (whiteAttacker?.piece?.name === PieceNames.ROOK) {
      const min = Math.min(whiteAttacker.x, whiteKing.x);
      const max = Math.max(whiteAttacker.x, whiteKing.x);

      for (let x = min + 1; x < max; x++) {
        if (
          this.piece?.canMove(target) &&
          target === this.board.getCells(whiteAttacker.y, x)
        ) {
          return true;
        }
      }

      const min1 = Math.min(whiteAttacker.y, whiteKing.y);
      const max1 = Math.max(whiteAttacker.y, whiteKing.y);

      for (let y = min1 + 1; y < max1; y++) {
        if (
          this.piece?.canMove(target) &&
          target === this.board.getCells(y, whiteAttacker.x)
        ) {
          return true;
        }
      }
    }

    //black rook
    if (blackAttacker?.piece?.name === PieceNames.ROOK) {
      const min = Math.min(blackAttacker.x, blackKing.x);
      const max = Math.max(blackAttacker.x, blackKing.x);

      for (let x = min + 1; x < max; x++) {
        if (
          this.piece?.canMove(target) &&
          target === this.board.getCells(blackAttacker.y, x)
        ) {
          return true;
        }
      }

      const min1 = Math.min(blackAttacker.y, blackKing.y);
      const max1 = Math.max(blackAttacker.y, blackKing.y);

      for (let y = min1 + 1; y < max1; y++) {
        if (
          this.piece?.canMove(target) &&
          target === this.board.getCells(y, blackAttacker.x)
        ) {
          return true;
        }
      }
    }
    //white Queen
    if (whiteAttacker?.piece?.name === PieceNames.QUEEN) {
      const absY = Math.abs(whiteKing.y - whiteAttacker.y);
      const absX = Math.abs(whiteKing.x - whiteAttacker.x);

      const dy = whiteAttacker.y < whiteKing.y ? 1 : -1;
      const dx = whiteAttacker.x < whiteKing.x ? 1 : -1;
      if (absX === absY) {
        for (let i = 1; i < absY; i++) {
          if (
            this.piece?.canMove(target) &&
            target ===
              this.board.getCells(
                whiteAttacker.y + dy * i,
                whiteAttacker.x + dx * i
              )
          ) {
            return true;
          }
        }
      } else {
        const min = Math.min(whiteAttacker.x, whiteKing.x);
        const max = Math.max(whiteAttacker.x, whiteKing.x);

        for (let x = min + 1; x < max; x++) {
          if (
            this.piece?.canMove(target) &&
            target === this.board.getCells(whiteAttacker.y, x)
          ) {
            return true;
          }
        }
        const min1 = Math.min(whiteAttacker.y, whiteKing.y);
        const max1 = Math.max(whiteAttacker.y, whiteKing.y);

        for (let y = min1 + 1; y < max1; y++) {
          if (
            this.piece?.canMove(target) &&
            target === this.board.getCells(y, whiteAttacker.x)
          ) {
            return true;
          }
        }
      }
    }

    //black Queen
    if (blackAttacker?.piece?.name === PieceNames.QUEEN) {
      const absY = Math.abs(blackKing.y - blackAttacker.y);
      const absX = Math.abs(blackKing.x - blackAttacker.x);

      const dy = blackAttacker.y < blackKing.y ? 1 : -1;
      const dx = blackAttacker.x < blackKing.x ? 1 : -1;
      if (absX === absY) {
        for (let i = 1; i < absY; i++) {
          if (
            this.piece?.canMove(target) &&
            target ===
              this.board.getCells(
                blackAttacker.y + dy * i,
                blackAttacker.x + dx * i
              )
          ) {
            return true;
          }
        }
      } else {
        const min = Math.min(blackAttacker.x, blackKing.x);
        const max = Math.max(blackAttacker.x, blackKing.x);

        for (let x = min + 1; x < max; x++) {
          if (
            this.piece?.canMove(target) &&
            target === this.board.getCells(blackAttacker.y, x)
          ) {
            return true;
          }
        }
        const min1 = Math.min(blackAttacker.y, blackKing.y);
        const max1 = Math.max(blackAttacker.y, blackKing.y);

        for (let y = min1 + 1; y < max1; y++) {
          if (
            this.piece?.canMove(target) &&
            target === this.board.getCells(y, blackAttacker.x)
          ) {
            return true;
          }
        }
      }
    }

    return false;
  }

  // Moves a piece
  movePiece(target: Cell) {
    if (
      this.piece &&
      this.piece.name === PieceNames.PAWN &&
      this.y !== 7 &&
      this.piece.canMove(this.board.getCells(this.y + 1, this.x - 1)) &&
      this.board.getCells(this.y + 1, this.x - 1).isEmpty() &&
      target.x === this.x - 1 &&
      target.y === this.y + 1
    ) {
      this.board.getCells(this.y + 1, this.x - 1).setPiece(this.piece);

      this.piece = null;

      this.addLostPiece(this.board.getCells(this.y + 1, this.x).piece!);

      this.board.getCells(this.y + 1, this.x).piece = null;
    }

    if (this.piece && this.piece?.canMove(target)) {
      this.piece.movePiece!(target);
      if (target.piece) {
        this.addLostPiece(target.piece);
      }

      target.setPiece(this.piece);
      this.piece = null;
    }
  }
}
