import { useCallback, useEffect, useState } from "react";
import { Colors } from "../../helpers/Enums/Colors";
import { Board } from "../../models/Chess/Board";
import { Cell } from "../../models/Chess/Cell";
import { Player } from "../../models/Chess/Player";
import BoardComponent from "./BoardComponent";
import LostPieces from "./LostPieces";
import cl from "./ChessBoard.module.scss";
import { CreateBoard } from "../../models/Chess/BoardMethods/CreateBoard";
import { KingMethods } from "../../models/Chess/PieceMethods/KingMethods";


const ChessBoard = () => {
  const [board, setBoard] = useState(new Board());

  const [whitePlayer] = useState(new Player(Colors.WHITE));

  const [blackPlayer] = useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer);

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);


  const restart = () => {
    CreateBoard(setBoard);
    setSelectedCell(null);
    setCurrentPlayer(whitePlayer);
  };


  useEffect(() => {
    CreateBoard(setBoard);
  }, []);

  const swapPlayers = useCallback(() => {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }, [currentPlayer, blackPlayer, whitePlayer]);


  return (
    <div className={cl.chess}>
      {KingMethods.Mate(board, currentPlayer.color)
        ?
        <p className={cl.mateMessage}>
          Ready for another Game? Press restart
        </p>
        :
        <h2 className={cl.turn}>{currentPlayer.color} to move
        </h2>}
      <button
        className={cl.restartBtn} onClick={restart}
      >Restart
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
            title="Black Pieces"
            pieces={board.lostBlackPieces}
            board={board}
            currentPlayer={currentPlayer}
          />
          <LostPieces
            title="White Pieces"
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
