import { Colors } from "../../../helpers/Colors";
import { PieceNames } from "../../../helpers/PieceNames";
import { ChCell } from "../ChCell";
import { ChPiece } from "./ChPiece";
import blackLogo from '../../../assets/black attempt 1.png'
import whiteLogo from '../../../assets/white atempt 1.png'

export class Checker extends ChPiece {
  constructor(color: Colors, cell: ChCell){
    super(color, cell);
    this.name = PieceNames.CH_PIECE;
    this.logo = this.color === Colors.BLACK ? blackLogo : whiteLogo
  }
}