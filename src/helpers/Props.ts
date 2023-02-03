import { Board } from "../models/Chess/Board";
import { Cell } from "../models/Chess/Cell";
import { Piece } from "../models/Chess/Pieces/Piece";
import { Player } from "../models/Chess/Player";

export interface Boardprops {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player;
  swapPlayers: () => void;
  selectedCell: Cell | null;
  setSelectedCell: (cell: Cell | null) => void;
}

export interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
  selectedCell: Cell | null;
  setSelectedCell: (cell: Cell | null) => void;
  currentPlayer: Player;
}

export interface HeaderProps {
  clickHandler: () => void;
}

export interface lostprops {
  title: string;
  pieces: Piece[];
}

export interface lostGraphProps {
  pieces: Piece[];
  classes: any
}