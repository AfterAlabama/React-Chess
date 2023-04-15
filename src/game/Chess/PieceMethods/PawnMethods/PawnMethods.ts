import { Cell } from '../../Cell';
import { Pawn } from '../../Pieces/Pawn';
import { CanPawnMoveLogic } from './CanPawnMove/CanPawnMoveLogic';
import { IsCellUnderPawnAttackLogic } from './IsCellUnderPawnAttack/IsCellUnderPawnAttackLogic';
import { IsPawnAttackLogic } from './IsPawnAttack/IsPawnAttackLogic';

export class PawnMethods {
	static isCellUnderPawnAttack(cell: Cell, target: Cell) {
		return IsCellUnderPawnAttackLogic(cell, target);
	}

	static CanPawnMove(pawn: Pawn, target: Cell) {
		return CanPawnMoveLogic(pawn, target);
	}

	static isPawnAttack(pawn: Pawn, target: Cell) {
		return IsPawnAttackLogic(pawn, target);
	}
}
