import { useEffect, useState } from 'react';
import { Colors } from '../../helpers/Enums/Colors';
import { CreateChBoard } from '../../models/Checkers/BoardMethods/CreateChBoard';
import { ChBoard } from '../../models/Checkers/ChBoard';
import { Player } from '../../models/Chess/Player';
import CheckersBoardComponent from './CheckersBoardComponent';
import cl from './ChBoard.module.scss';
import { ChCell } from '../../models/Checkers/ChCell';
import checkersPic from '../../assets/CheckersBackground.jpg';

const CheckersBoard = () => {
  const [chBoard, setChBoard] = useState(new ChBoard());

  const [whitePlayer] = useState(new Player(Colors.WHITE));

  const [blackPlayer] = useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer);

  const [selectedChSell, setSelectedChCell] = useState<ChCell | null>(null);

  useEffect(() => {
    CreateChBoard(setChBoard)
  }, []);

  const restart = () => {
    CreateChBoard(setChBoard);
    setSelectedChCell(null);
    setCurrentPlayer(whitePlayer)
  };

  const swapPlayers = () => {
    setCurrentPlayer(currentPlayer === whitePlayer ? blackPlayer : whitePlayer)
  }

  return (
    <div
      className={cl.checkers}
    >
      <img
        alt=''
        src={checkersPic}
        className={cl.checkersPic}
      />
      <h2
        className = {cl.turn}
      >{currentPlayer.color} to move</h2>
      <button
        className={cl.restartBtn}
        onClick={restart}
      >Restart
      </button>
      <CheckersBoardComponent
        chBoard={chBoard}
        setChBoard={setChBoard}
        selectedChCell={selectedChSell}
        setSelectedChCell={setSelectedChCell}
        currentPlayer = {currentPlayer}
        swapPlayers = {swapPlayers}
      />
    </div>
  );
};

export default CheckersBoard;
