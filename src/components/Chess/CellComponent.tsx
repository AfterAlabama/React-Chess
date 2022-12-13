import React, { FC } from "react";
import { CellProps } from "../../helpers/Props";

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  const cellStyle = ["cell", cell.color, selected ? "selected" : ""].join(" ");

  const showPieces = cell.piece?.logo ? (
    <img alt="" src={cell.piece.logo} draggable={false}></img>
  ) : (
    ""
  );

  const availableDots =
    cell.available && !cell.piece ? <div className="available"></div> : "";

  const PieceUnderAttack = {
    background: cell.available && cell.piece ? "green" : "",
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
