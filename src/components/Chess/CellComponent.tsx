import React, { FC} from "react";
import { CellProps } from "../../helpers/Props";


const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {

  const cellStyle = ["cell", cell.color, selected ? "selected" : ""].join(" ");



  const showPieces = cell.piece?.logo ? (
    <img draggable={false} id="pic" alt="" src={cell.piece.logo}></img>
  ) : null;

  const availableDots =
    cell.available && !cell.piece ? <div className="available"></div> : "";

  const PieceUnderAttack = {
    background:
      cell.available && cell.piece ? 'radial-gradient(red, burlywood)' : "",
  };

  return (
    <div
      className={cellStyle}
      onClick={() => click(cell)}
      style={PieceUnderAttack}
    >
      {showPieces}
      {availableDots}
    </div>
  );

};

export default CellComponent;
