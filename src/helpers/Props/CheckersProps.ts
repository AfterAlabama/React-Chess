import { ChBoard } from "../../models/Checkers/ChBoard";
import { ChCell } from "../../models/Checkers/ChCell";

export interface ChBoardProps {
  chBoard: ChBoard;
  setChBoard: (chBoard: ChBoard) => void;
  selectedChCell: ChCell | null;
  setSelectedChCell: (cell: ChCell | null) => void;
}

export interface ChCellProps {
  cell: ChCell;
  selected: boolean;
  click: (target: ChCell) => void;
}

