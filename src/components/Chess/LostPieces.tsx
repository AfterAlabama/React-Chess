import  { FC } from "react";
import { lostprops } from "../../helpers/Props";
import LostPieceGraph from "../UI/LostPieceGraph";
import classes from './LostPieces.module.scss'


const LostPieces: FC<lostprops> = ({ pieces, title }) => {


  return (
    <div className = {classes.lost}>
      <h3>{title}</h3>
      <LostPieceGraph 
        pieces = {pieces} 
        classes = {classes} 
      />
    </div>
  );
};

export default LostPieces;
