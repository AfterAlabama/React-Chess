import { FC } from 'react';
import { Lostprops } from '../../types/Props/ChessProps';
import { KingMethods } from '../../game/Chess/PieceMethods/KingMethods/KingMethods';
import LostPieceGraph from '../UI/LostPieces/LostPieceGraph';
import cl from './LostPieces.module.scss';

const LostPieces: FC<Lostprops> = ({ pieces, title, board, currentPlayer }) => {
	const condition =
		KingMethods.isKingUnderAttack(board).blackKingCheck ||
		KingMethods.isKingUnderAttack(board).whiteKingCheck ||
		KingMethods.Mate(board, currentPlayer.color);

	const checked = (
		<article className={cl.lostChecked}>
			<h3>{title}</h3>
			<LostPieceGraph pieces={pieces} />
		</article>
	);

	const notChecked = (
		<article className={cl.lost}>
			<h3>{title}</h3>
			<LostPieceGraph pieces={pieces} />
		</article>
	);

	return <>{condition ? checked : notChecked}</>;
};

export default LostPieces;
