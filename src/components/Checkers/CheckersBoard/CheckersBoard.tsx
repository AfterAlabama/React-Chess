import { useRef, useState } from 'react';
import { Colors } from '../../../types/Enums/Colors';
import { ChBoard } from '../../../game/Checkers/ChBoard';
import { Player } from '../../../game/Chess/Player';
import CheckersBoardComponent from '../CheckersBoardComponent/CheckersBoardComponent';
import cl from './ChBoard.module.scss';
import { ChCell } from '../../../game/Checkers/ChCell';
import checkersPic from '../../../assets/CheckersBackground.jpg';
import { useIsSecondRender } from '../../../hooks/isSecondRender';
import { CheckersGameOver } from '../../../game/Checkers/BoardMethods/CheckersGameOver';
import { CreateBoard } from '../../../game/SharedLogic/CreateBoard/CreateBoard';

const CheckersBoard = () => {
	const [chBoard, setChBoard] = useState(CreateBoard<ChBoard>(ChBoard));

	const [whitePlayer] = useState(new Player(Colors.WHITE));

	const [blackPlayer] = useState(new Player(Colors.BLACK));

	const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer);

	const [selectedChCell, setSelectedChCell] = useState<ChCell | null>(null);

	const h2Ref = useRef<HTMLHeadingElement>(null!);

	//checks if white or black have lost
	useIsSecondRender<ChBoard>(() => {
		if (CheckersGameOver.HasWhiteLost(chBoard)) {
			h2Ref.current.textContent = 'white Lost';
		} else {
			h2Ref.current.textContent = `${currentPlayer.color} to move`;
		}
		if (CheckersGameOver.HasBlackLost(chBoard)) {
			h2Ref.current.textContent = 'black Lost';
		} else {
			h2Ref.current.textContent = `${currentPlayer.color} to move`;
		}
	}, [chBoard]);

	const restart = () => {
		setChBoard(CreateBoard<ChBoard>(ChBoard));
		setSelectedChCell(null);
		setCurrentPlayer(whitePlayer);
	};

	const swapPlayers = () => {
		setCurrentPlayer(currentPlayer === whitePlayer ? blackPlayer : whitePlayer);
	};

	return (
		<div className={cl.checkers}>
			<img
				alt='checkersPic'
				src={checkersPic}
				className={cl.checkersPic}
			/>
			<h2
				ref={h2Ref}
				className={cl.turn}
			>
				{currentPlayer.color} to move
			</h2>
			<button
				className={cl.restartBtn}
				onClick={restart}
			>
				Restart
			</button>
			<CheckersBoardComponent
				chBoard={chBoard}
				setChBoard={setChBoard}
				selectedChCell={selectedChCell}
				setSelectedChCell={setSelectedChCell}
				currentPlayer={currentPlayer}
				swapPlayers={swapPlayers}
			/>
		</div>
	);
};

export default CheckersBoard;
