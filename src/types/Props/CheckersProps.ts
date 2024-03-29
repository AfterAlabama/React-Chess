import { ChBoard } from '../../game/Checkers/ChBoard';
import { ChCell } from '../../game/Checkers/ChCell';
import { Player } from '../../game/Chess/Player';

export interface ChBoardProps {
	chBoard: ChBoard;
	setChBoard: (chBoard: ChBoard) => void;
	selectedChCell: ChCell | null;
	setSelectedChCell: (cell: ChCell | null) => void;
	currentPlayer: Player;
	swapPlayers: () => void;
}

export interface ChCellProps
	extends Pick<
		ChBoardProps,
		'currentPlayer' | 'setSelectedChCell' | 'selectedChCell'
	> {
	cell: ChCell;
	selected: boolean;
	click: (target: ChCell) => void;
}
