import { useCallback, useEffect, useState } from 'react';
import { Colors } from '../../helpers/Colors';
import { CreateChBoard } from '../../models/Checkers/BoardMethods/CreateChBoard';
import { ChBoard } from '../../models/Checkers/ChBoard';
import { Player } from '../../models/Chess/Player';
import CheckersBoardComponent from './CheckersBoardComponent';
import cl from './ChBoard.module.scss'
import { ChCell } from '../../models/Checkers/ChCell';

const CheckersBoard = () => {
  const [chBoard, setChBoard] = useState(new ChBoard());

  const [whitePlayer] = useState(new Player(Colors.WHITE));

  const [blackPlayer] = useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer);

  const [selectedChSell, setSelectedChCell] = useState<ChCell | null>(null)

  useEffect(() => {
    CreateChBoard(setChBoard)
  }, []);

  const restart = useCallback(() => {
    CreateChBoard(setChBoard)
  }, [whitePlayer]);

  return (
    <div
      className = {cl.checkers}
    >
      <button 
        className = {cl.restartBtn} 
        onClick = {restart}
        >Restart
      </button>
      <CheckersBoardComponent
        chBoard = {chBoard}
        setChBoard = {setChBoard}
        selectedChCell = {selectedChSell}
        setSelectedChCell = {setSelectedChCell}
      />
    </div>
  )
}

export default CheckersBoard
