import { ChBoard } from "../../models/Checkers/ChBoard";
import { ChCell } from "../../models/Checkers/ChCell";
import { Player } from "../../models/Chess/Player";

export interface ChBoardProps {
  chBoard: ChBoard;
  setChBoard: (chBoard: ChBoard) => void;
  selectedChCell: ChCell | null;
  setSelectedChCell: (cell: ChCell | null) => void;
  currentPlayer: Player
  swapPlayers: () => void
}

export interface ChCellProps {
  cell: ChCell;
  selected: boolean;
  click: (target: ChCell) => void;
}

