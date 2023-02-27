import { FC } from "react";
import { lostprops } from "../../helpers/Props";
import { KingMethods } from "../../models/Chess/PieceMethods/KingMethods";
import LostPieceGraph from "../UI/LostPieceGraph";
import classes from './LostPieces.module.scss';


const LostPieces: FC<lostprops> = ({ pieces, title, board, currentPlayer }) => {

  return (
    <>
      {
        KingMethods.isKingUnderAttack(board).blackKingCheck ||
          KingMethods.isKingUnderAttack(board).whiteKingCheck ||
          KingMethods.Mate(board, currentPlayer.color)
          ?
          <div className={classes.lostChecked}>
            <h3>{title}</h3>
            <LostPieceGraph
              pieces={pieces}
              classes={classes}
            />
          </div>
          :
          <div className={classes.lost}>
            <h3>{title}</h3>
            <LostPieceGraph
              pieces={pieces}
              classes={classes}
            />
          </div>
      }
    </>
  );
};

export default LostPieces;
