import { FC } from 'react';
import { LostGraphProps } from '../../../../types/Props/MainPageProps';
import cl from './LostPieceGraph.module.scss';

const LostPieceGraph: FC<LostGraphProps> = ({ pieces }) => {
	const lostPieces = pieces.map((piece) => (
		<div
			className={cl.pieceText}
			key={piece.cell.id}
		>
			__{piece.name}
			{piece.logo && (
				<img
					className={cl.pieceImg}
					alt='lostPiece'
					src={piece.logo}
				></img>
			)}
		</div>
	));

	return <>{lostPieces}</>;
};

export default LostPieceGraph;
