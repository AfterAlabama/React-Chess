import React, { FC } from "react";
import { lostprops } from "../../helpers/Props";
import classes from './LostPieces.module.scss'


const LostPieces: FC<lostprops> = ({ pieces, title }) => {
  return (
    <div className= {classes.lost}>
      <h3>{title}</h3>
      {pieces.map((piece) => (
        <div key={piece.cell.id}>
          __{piece.name}
          {piece.logo && (
            <img 
              className= {classes.pieceImg} 
              alt="" 
              src={piece.logo}
            ></img>
          )}
        </div>
      ))}
    </div>
  );
};

export default LostPieces;
