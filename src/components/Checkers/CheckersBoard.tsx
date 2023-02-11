import { useCallback, useEffect, useState } from 'react';
import { Colors } from '../../helpers/Colors';
import { CreateChBoard } from '../../models/Checkers/BoardMethods/createChBoard';
import { ChBoard } from '../../models/Checkers/ChBoard';
import { Player } from '../../models/Chess/Player';
import CheckersBoardComponent from './CheckersBoardComponent';
import cl from './ChBoard.module.scss'

const CheckersBoard = () => {
  const [chBoard, setChBoard] = useState(new ChBoard());

  const [whitePlayer] = useState(new Player(Colors.WHITE));

  const [blackPlayer] = useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer);

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
      <CheckersBoardComponent
        chBoard = {chBoard}
        setChBoard = {setChBoard}
      />
    </div>
  )
}

export default CheckersBoard
