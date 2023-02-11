import { Colors } from "../../../helpers/Colors";
import { PieceNames } from "../../../helpers/PieceNames";
import { ChCell } from "../ChCell";
import logo from '../../../assets/black attempt 1.png'

export abstract class ChPiece {
  color: Colors;
  name: PieceNames;
  logo: typeof logo | null;
  cell: ChCell;

  constructor(color: Colors, cell: ChCell) {
    this.color = color;
    this.name = PieceNames.CH_PIECE;
    this.cell = cell;
    this.cell.piece = this;
  };

  public canMove(target: ChCell) {
    if (this.color === target.piece?.color) {
      return false;
    };

    return true;
  };

}