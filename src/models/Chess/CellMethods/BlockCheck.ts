import { PieceNames } from "../../../helpers/PieceNames";
import { Board } from "../Board";
import { FindPiece } from "../BoardMethods/FindPiece";
import { Cell } from "../Cell";
import { KingMethods } from "../PieceMethods/KingMethods";

export class BlockCheck {
  static doesPieceBlockTheCheck(
    target: Cell,
    board: Board,
    movingCell : Cell
    ) {
    const { blackKing, whiteKing } = FindPiece.findKings(board);

    for (let i = 0; i < board.cells.length; i++) {
      const row = board.cells[i];
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

          if (absX === absY && randomCell.piece.canMove(movingCell)) {
            for (let z = 1; z < absY; z++) {
              if (
                movingCell ===
                  board.getCells(
                    randomCell.y + dy * z,
                    randomCell.x + dx * z
                  ) &&
                target !== randomCell
              ) {
                return true;
              };

              if (
                target ===
                board.getCells(
                  randomCell.y + dy * z,
                  randomCell.x + dx * z
                )
              ) {
                return false;
              }
            }
          }
        };

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

          if (absX === absY && randomCell.piece.canMove(movingCell)) {
            for (let z = 1; z < absY; z++) {
              if (
                target ===
                board.getCells(
                  randomCell.y + dy * z,
                  randomCell.x + dx * z
                )
              ) {
                return false;
              };

              if (
                movingCell ===
                  board.getCells(
                    randomCell.y + dy * z,
                    randomCell.x + dx * z
                  ) &&
                target !== randomCell
              ) {
                return true;
              }
            }
          }
        };

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
              if (randomCell.piece.canMove(movingCell)) {
                if (movingCell === board.getCells(randomCell.y, x)) {
                  return true;
                };

                if (
                  target === randomCell ||
                  target === board.getCells(randomCell.y, x)
                ) {
                  return false;
                }
              }
            }
          };

          if (whiteKing.x === randomCell.x) {
            const min1 = Math.min(whiteKing.y, randomCell.y);

            const max1 = Math.max(whiteKing.y, randomCell.y);

            for (let y = min1 + 1; y < max1; y++) {
              if (randomCell.piece.canMove(movingCell)) {
                if (
                  target === board.getCells(y, randomCell.x) ||
                  target === randomCell
                ) {
                  return false;
                };

                if (movingCell === board.getCells(y, randomCell.x)) {
                  return true;
                }
              }
            }
          }
        };

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

          if (absX === absY && randomCell.piece.canMove(movingCell)) {
            for (let z = 1; z < absY; z++) {
              if (
                movingCell ===
                  board.getCells(
                    randomCell.y + dy * z,
                    randomCell.x + dx * z
                  ) &&
                target !== randomCell
              ) {
                return true;
              };

              if (
                target ===
                board.getCells(
                  randomCell.y + dy * z,
                  randomCell.x + dx * z
                )
              ) {
                return false;
              }
            }
          };

          if (whiteKing.y === randomCell.y) {
            const min = Math.min(randomCell.x, whiteKing.x);

            const max = Math.max(randomCell.x, whiteKing.x);

            for (let x = min + 1; x < max; x++) {
              if (randomCell.piece.canMove(movingCell)) {
                if (movingCell === board.getCells(randomCell.y, x)) {
                  return true;
                };

                if (
                  target === randomCell ||
                  target === board.getCells(randomCell.y, x)
                ) {
                  return false;
                }
              }
            }
          };

          if (whiteKing.x === randomCell.x) {
            const min1 = Math.min(whiteKing.y, randomCell.y);

            const max1 = Math.max(whiteKing.y, randomCell.y);

            for (let y = min1 + 1; y < max1; y++) {
              if (randomCell.piece.canMove(movingCell)) {
                if (
                  target === board.getCells(y, randomCell.x) ||
                  target === randomCell
                ) {
                  return false;
                };

                if (movingCell === board.getCells(y, randomCell.x)) {
                  return true;
                }
              }
            }
          }
        };

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

          if (absX === absY && randomCell.piece.canMove(movingCell)) {
            for (let z = 1; z < absY; z++) {
              if (
                movingCell ===
                  board.getCells(
                    randomCell.y + dy * z,
                    randomCell.x + dx * z
                  ) &&
                target !== randomCell
              ) {
                return true;
              };

              if (
                target ===
                board.getCells(
                  randomCell.y + dy * z,
                  randomCell.x + dx * z
                )
              ) {
                return false;
              }
            }
          };

          if (blackKing.y === randomCell.y) {
            const min = Math.min(randomCell.x, blackKing.x);

            const max = Math.max(randomCell.x, blackKing.x);

            for (let x = min + 1; x < max; x++) {
              if (randomCell.piece.canMove(movingCell)) {
                if (movingCell === board.getCells(randomCell.y, x)) {
                  return true;
                };

                if (
                  target === randomCell ||
                  target === board.getCells(randomCell.y, x)
                ) {
                  return false;
                }
              }
            }
          };

          if (blackKing.x === randomCell.x) {
            const min1 = Math.min(blackKing.y, randomCell.y);

            const max1 = Math.max(blackKing.y, randomCell.y);

            for (let y = min1 + 1; y < max1; y++) {
              if (randomCell.piece.canMove(movingCell)) {
                if (
                  target === board.getCells(y, randomCell.x) ||
                  target === randomCell
                ) {
                  return false;
                };

                if (movingCell === board.getCells(y, randomCell.x)) {
                  return true;
                }
              }
            }
          }
        }
      }
    }
    return false;
  };

  static doesCellBlockTheCheck(
    target: Cell,
    board: Board,
    movingCell: Cell
    ) {
    const { blackKing, whiteKing } = FindPiece.findKings(board);

    const { blackAttacker, whiteAttacker } = KingMethods.isKingUnderAttack(board);

    for (let i = 0; i < board.cells.length; i++) {
      const row = board.cells[i];
      for (let j = 0; j < row.length; j++) {
        const randomCell = row[j];
        if (
          target === whiteAttacker &&
          randomCell !== whiteKing &&
          randomCell.piece?.canMove(target)
        ) {
          return true;
        };

        if (
          target === blackAttacker &&
          randomCell !== blackKing &&
          randomCell.piece?.canMove(target)
        ) {
          return true;
        }
      }
    };

    if (whiteAttacker?.piece?.name === PieceNames.BISHOP) {

      //black bishop
      const absY = Math.abs(whiteKing.y - whiteAttacker.y);
      const absX = Math.abs(whiteKing.x - whiteAttacker.x);

      if (absX !== absY) {
        return false;
      };

      const dy = whiteAttacker.y < whiteKing.y ? 1 : -1;
      const dx = whiteAttacker.x < whiteKing.x ? 1 : -1;

      for (let i = 1; i < absY; i++) {
        if (
          target ===
          board.getCells(
            whiteAttacker.y + dy * i,
            whiteAttacker.x + dx * i
          )
        ) {
          return true;
        }
      }
    };

    //white bishop
    if (blackAttacker?.piece?.name === PieceNames.BISHOP) {
      const absY = Math.abs(blackKing.y - blackAttacker.y);
      const absX = Math.abs(blackKing.x - blackAttacker.x);

      if (absX !== absY) {
        return false;
      };

      const dy = blackAttacker.y < blackKing.y ? 1 : -1;
      const dx = blackAttacker.x < blackKing.x ? 1 : -1;

      for (let i = 1; i < absY; i++) {
        if (
          movingCell.piece?.canMove(target) &&
          target ===
            board.getCells(
              blackAttacker.y + dy * i,
              blackAttacker.x + dx * i
            )
        ) {
          return true;
        }
      }
    };

    //black rook
    if (whiteAttacker?.piece?.name === PieceNames.ROOK) {
      const min = Math.min(whiteAttacker.x, whiteKing.x);
      const max = Math.max(whiteAttacker.x, whiteKing.x);

      for (let x = min + 1; x < max; x++) {
        if (
          movingCell.piece?.canMove(target) &&
          target === board.getCells(whiteAttacker.y, x)
        ) {
          return true;
        }
      };

      const min1 = Math.min(whiteAttacker.y, whiteKing.y);
      const max1 = Math.max(whiteAttacker.y, whiteKing.y);

      for (let y = min1 + 1; y < max1; y++) {
        if (
          movingCell.piece?.canMove(target) &&
          target === board.getCells(y, whiteAttacker.x)
        ) {
          return true;
        }
      }
    };

    //black rook
    if (blackAttacker?.piece?.name === PieceNames.ROOK) {
      const min = Math.min(blackAttacker.x, blackKing.x);
      const max = Math.max(blackAttacker.x, blackKing.x);

      for (let x = min + 1; x < max; x++) {
        if (
          movingCell.piece?.canMove(target) &&
          target === board.getCells(blackAttacker.y, x)
        ) {
          return true;
        }
      };

      const min1 = Math.min(blackAttacker.y, blackKing.y);
      const max1 = Math.max(blackAttacker.y, blackKing.y);

      for (let y = min1 + 1; y < max1; y++) {
        if (
          movingCell.piece?.canMove(target) &&
          target === board.getCells(y, blackAttacker.x)
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
            movingCell.piece?.canMove(target) &&
            target ===
              board.getCells(
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
            movingCell.piece?.canMove(target) &&
            target === board.getCells(whiteAttacker.y, x)
          ) {
            return true;
          }
        };

        const min1 = Math.min(whiteAttacker.y, whiteKing.y);
        const max1 = Math.max(whiteAttacker.y, whiteKing.y);

        for (let y = min1 + 1; y < max1; y++) {
          if (
            movingCell.piece?.canMove(target) &&
            target === board.getCells(y, whiteAttacker.x)
          ) {
            return true;
          }
        }
      }
    };

    //black Queen
    if (blackAttacker?.piece?.name === PieceNames.QUEEN) {
      const absY = Math.abs(blackKing.y - blackAttacker.y);
      const absX = Math.abs(blackKing.x - blackAttacker.x);

      const dy = blackAttacker.y < blackKing.y ? 1 : -1;
      const dx = blackAttacker.x < blackKing.x ? 1 : -1;
      if (absX === absY) {
        for (let i = 1; i < absY; i++) {
          if (
            movingCell.piece?.canMove(target) &&
            target ===
              board.getCells(
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
            movingCell.piece?.canMove(target) &&
            target === board.getCells(blackAttacker.y, x)
          ) {
            return true;
          }
        };
        
        const min1 = Math.min(blackAttacker.y, blackKing.y);
        const max1 = Math.max(blackAttacker.y, blackKing.y);

        for (let y = min1 + 1; y < max1; y++) {
          if (
            movingCell.piece?.canMove(target) &&
            target === board.getCells(y, blackAttacker.x)
          ) {
            return true;
          }
        }
      }
    }

    return false;
  }
}