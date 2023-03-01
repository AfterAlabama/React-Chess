import { FC, Fragment, useCallback, useEffect } from 'react';
import { ChBoardProps } from '../../helpers/Props/CheckersProps';
import { CheckersActionsOnClick } from '../../models/Checkers/BoardMethods/CheckersActionsOnClick';
import { ChCell } from '../../models/Checkers/ChCell';
import cl from './ChBoardComponent.module.scss';
import CheckersCellComponent from './CheckersCellComponent';


const CheckersBoardComponent: FC<ChBoardProps> = ({
  chBoard,
  setChBoard,
  selectedChCell,
  setSelectedChCell,
  currentPlayer,
  swapPlayers
}) => {

  const click = (target: ChCell) => {
    CheckersActionsOnClick.OrdinaryMoves(
      selectedChCell,
      target,
      chBoard,
      setSelectedChCell,
      currentPlayer,
      swapPlayers
    );
  };


  const highlightCells = () => {
    chBoard.highlightChCells(selectedChCell);
    updateBoard();
  };

  const updateBoard = useCallback(() => {
    const newBoard = chBoard.getCopyBoard();
    setChBoard(newBoard);
  }, [chBoard, setChBoard]);

  useEffect(() => {
    highlightCells();
  }, [selectedChCell]);

  return (
    <div className={cl.board} >
      {chBoard.cells.map((row, index) =>
        <Fragment
          key={index}
        >
          {row.map(cell => <CheckersCellComponent
            key={cell.id}
            cell={cell}
            selected={cell.x === selectedChCell?.x && cell.y === selectedChCell?.y}
            click={click}
            currentPlayer = {currentPlayer}
            setSelectedChCell={setSelectedChCell}
            selectedChCell={selectedChCell}
          />)}
        </Fragment>)}
    </div>
  );
};

export default CheckersBoardComponent;
