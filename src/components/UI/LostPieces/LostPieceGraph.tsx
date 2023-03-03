import { FC } from 'react';
import { LostGraphProps } from '../../../helpers/Props/UIProps';
import cl from './LostPieceGraph.module.scss';

const LostPieceGraph: FC<LostGraphProps> = ({ pieces }) => {
	const lostPieces = pieces.map((piece) => (
		<section
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
		</section>
	));

	return <>{lostPieces}</>;
};

export default LostPieceGraph;
