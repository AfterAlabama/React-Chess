import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Cell } from '../../Cell';
import { King } from '../../Pieces/King';
import { CanKingCastleLogic } from './CanKingCastle/CanKingCastleLogic';
import { CanKingMoveLogic } from './CanKingMove/CanKingMoveLogic';
import { CanKingProtectLogic } from './CanKingProtect/CanKingProtectLogic';
import {
	IsKingUnderAttackLogic,
} from './IsKingUnderAttack/IsKingUnderAttackLogic';
import { MateLogic } from './Mate/MateLogic';

export class KingMethods {
	static isKingUnderAttack(board: Board) {
		return IsKingUnderAttackLogic(board);
	}

	static Mate(board: Board, currentColor: Colors) {
		return MateLogic(board, currentColor);
	}

	static CanKingCastle(king: King, target: Cell) {
		return CanKingCastleLogic(king, target);
	}

	static CanKingMove(king: King, target: Cell) {
		return CanKingMoveLogic(king, target);
	}

	static CanKingProtect(king: King, target: Cell) {
		return CanKingProtectLogic(king, target);
	}
}
