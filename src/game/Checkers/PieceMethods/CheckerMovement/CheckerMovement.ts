import { ChCell } from '../../ChCell';
import { Checker } from '../../Pieces/Checker';
import { DoesCheckerAttackLogic } from './DoesCheckerAttack/DoesCheckerAttackLogic';
import { DoesCheckerMoveLogic } from './DoesCheckerMove/DoesCheckerMoveLogic';

// Tells if checkers are allowed to move on cells or not (no action)
export class CheckerMovement {
	static DoesCheckerMove(checker: Checker, target: ChCell) {
		return DoesCheckerMoveLogic(checker, target);
	}

	static DoesCheckerAttack(checker: Checker, target: ChCell) {
		return DoesCheckerAttackLogic(checker, target);
	}
}
