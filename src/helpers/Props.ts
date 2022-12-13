import { Board } from "../models/Chess/Board";
import { Cell } from "../models/Chess/Cell";
import { Player } from "../models/Chess/Player";

export interface Boardprops {
  board: Board;
  setBoard: (board: Board) => void
  currentPlayer: Player | null;
  swapPlayers: () => void
}

export interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}