import React, { FC } from "react";
import { lostprops } from "../../helpers/Props";
import classes from './LostPieces.module.scss'


const LostPieces: FC<lostprops> = ({ pieces, title }) => {

  const lostPieces = pieces.map((piece) => (
    <div 
      className = {classes.pieceText} 
      key = {piece.cell.id}
      >
      __{piece.name}
      {piece.logo && (
        <img 
          className = {classes.pieceImg} 
          alt = "" 
          src = {piece.logo}
        ></img>
      )}
    </div>
  ))

  return (
    <div className = {classes.lost}>
      <h3>{title}</h3>
      {lostPieces}
    </div>
  );
};

export default LostPieces;
