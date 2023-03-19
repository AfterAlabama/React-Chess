import { IsCellEmptyLogic } from './IsCellEmpty/IsCellEmptyLogic';
import { IsDiagonalEmptyLogic } from './IsDiagonalEmpty/IsDiagonalEmptyLogic';
import { IsHorizontalEmptyLogic } from './IsHorizontalEmpty/IsHorizontalEmptyLogic';
import { IsVerticalEmptyLogic } from './IsVerticalEmpty/IsVerticalEmptyLogic';

export class IsEmpty {
	static Cell<
		C extends {
			piece: P | null;
		},
		P
	>(cell: C): boolean {
		return IsCellEmptyLogic<C, P>(cell);
	}

	static Vertical<
		T extends {
			getCells: (y: number, x: number) => C;
		},
		C extends {
			y: number;
			x: number;
			board: T;
			piece: P | null;
		},
		P
	>(cell: C, target: C): boolean {
		return IsVerticalEmptyLogic<T, C, P>(cell, target);
	}

	static Horizontal<
		T extends {
			getCells: (y: number, x: number) => C;
		},
		C extends {
			y: number;
			x: number;
			board: T;
			piece: P | null;
		},
		P
	>(cell: C, target: C): boolean {
		return IsHorizontalEmptyLogic<T, C, P>(cell, target);
	}

	static Diagonal<
		T extends {
			getCells: (y: number, x: number) => C;
		},
		C extends {
			y: number;
			x: number;
			board: T;
			piece: P | null;
		},
		P
	>(cell: C, target: C): boolean {
		return IsDiagonalEmptyLogic<T, C, P>(cell, target);
	}
}
