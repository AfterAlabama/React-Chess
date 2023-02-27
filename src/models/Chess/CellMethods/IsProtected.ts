import { PieceNames } from "../../../helpers/PieceNames";
import { Cell } from "../Cell";
import { Piece } from "../Pieces/Piece";
import { IsEmpty } from "./IsEmpty";

export class IsProtected {
  static Diagonal(
    somePiece: Piece,
    target: Cell
  ){
    let count: number = 1;

    const absY = Math.abs(somePiece.cell.y - target.y);
    const absX = Math.abs(somePiece.cell.x - target.x);

    if (absY !== absX) {
      return false;
    }

    const dy = somePiece.cell.y < target.y ? 1 : -1;
    const dx = somePiece.cell.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if (
        IsEmpty.Cell(somePiece.cell.board.getCells(somePiece.cell.y + dy * i, somePiece.cell.x + dx * i))
        ||
        ( !IsEmpty.Cell(somePiece.cell.board.getCells(somePiece.cell.y + dy * i, somePiece.cell.x + dx * i)) 
        &&
        somePiece.cell.board.getCells(somePiece.cell.y + dy * i, somePiece.cell.x + dx * i).piece?.name === PieceNames.KING 
        &&
        somePiece.cell.board.getCells(somePiece.cell.y + dy * i, somePiece.cell.x + dx * i).piece?.color !== somePiece.color)
      ) {
        count += 1;
      }
    }

    if (count === absY) {
      return true;
    }
    return false
  }

  static Vertical(
    somePiece: Piece,
    target: Cell
  ){
    let count = 1;

    const min = Math.min(somePiece.cell.x, target.x);
    const max = Math.max(somePiece.cell.x, target.x);

    for (let x = min + 1; x < max; x++) {
      if (
        IsEmpty.Cell(somePiece.cell.board.getCells(somePiece.cell.y, x))
        ||
        ( !IsEmpty.Cell(somePiece.cell.board.getCells(somePiece.cell.y, x)) 
        &&
        somePiece.cell.board.getCells(somePiece.cell.y, x).piece?.name === PieceNames.KING 
        &&
        somePiece.cell.board.getCells(somePiece.cell.y, x).piece?.color !== somePiece.color)
      ) {
        count += 1;
      }
    };

    if (
      somePiece.cell.y === target.y &&
      count === Math.abs(target.x - somePiece.cell.x)
    ) {
      return true;
    };
    return false
  }

  static Horizontal(
    somePiece: Piece,
    target: Cell
  ){
    let count = 1;
    const min = Math.min(somePiece.cell.y, target.y);
    const max = Math.max(somePiece.cell.y, target.y);

    for (let y = min + 1; y < max; y++) {
      if (
        IsEmpty.Cell(somePiece.cell.board.getCells(y, somePiece.cell.x)) 
        ||
        (!IsEmpty.Cell(somePiece.cell.board.getCells(y, somePiece.cell.x) )
        &&
        somePiece.cell.board.getCells(y, somePiece.cell.x).piece?.name === PieceNames.KING 
        &&
        somePiece.cell.board.getCells(y, somePiece.cell.x).piece?.color !== somePiece.color)
      ) {
        count += 1;
      }
    };

    if (
      somePiece.cell.x === target.x &&
      count === Math.abs(target.y - somePiece.cell.y)
    ) {
      return true;
    };
    return false
  }
}