import { useState } from 'react';
import { Colors } from '../../../types/Enums/Colors';
import { Board } from '../../../game/Chess/Board';
import { Cell } from '../../../game/Chess/Cell';
import { Player } from '../../../game/Chess/Player';
import BoardComponent from '../BoardComponent/BoardComponent';
import LostPieces from '../LostPieces/LostPieces/LostPieces';
import cl from './ChessBoard.module.scss';
import { KingMethods } from '../../../game/Chess/PieceMethods/KingMethods/KingMethods';
import { CreateBoard } from '../../../game/SharedLogic/CreateBoard/CreateBoard';

const ChessBoard = () => {
	const [board, setBoard] = useState(CreateBoard<Board>(Board));
	const [whitePlayer] = useState(new Player(Colors.WHITE));

	const [blackPlayer] = useState(new Player(Colors.BLACK));

	const [currentPlayer, setCurrentPlayer] = useState(whitePlayer);

	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	const restart = () => {
		setBoard(CreateBoard<Board>(Board));
		setSelectedCell(null);
		setCurrentPlayer(whitePlayer);
	};

	const swapPlayers = () => {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
		);
	};

	const MateCondition = KingMethods.Mate(board, currentPlayer.color) ? (
		<p className={cl.mateMessage}>Ready for another Game? Press restart</p>
	) : (
		<h2 className={cl.turn}>{currentPlayer.color} to move</h2>
	);

	return (
		<div
			data-testid='chess'
			className={cl.chess}
		>
			{MateCondition}
			<button
				className={cl.restartBtn}
				onClick={restart}
			>
				Restart
			</button>
			<div className={cl.flex}>
				<BoardComponent
					board={board}
					setBoard={setBoard}
					currentPlayer={currentPlayer}
					swapPlayers={swapPlayers}
					selectedCell={selectedCell}
					setSelectedCell={setSelectedCell}
				/>
				<div className={cl.columns}>
					<LostPieces
						title='Black Pieces'
						pieces={board.lostBlackPieces}
						board={board}
						currentPlayer={currentPlayer}
					/>
					<LostPieces
						title='White Pieces'
						pieces={board.lostWhitePieces}
						board={board}
						currentPlayer={currentPlayer}
					/>
				</div>
			</div>
		</div>
	);
};

export default ChessBoard;
