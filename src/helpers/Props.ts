import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

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