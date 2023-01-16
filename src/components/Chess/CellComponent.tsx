import React, { FC } from "react";
import { CellProps } from "../../helpers/Props";
import { Cell } from "../../models/Chess/Cell/Cell";
import classes from './CellComponent.module.scss'

const CellComponent: FC<CellProps> = ({
  cell,
  selected,
  click,
  setSelectedCell,
  selectedCell,
  currentPlayer,
}) => {

  const cellStyle = [classes.cell, cell.color, selected ? classes.selected : ""].join(" ");

  const showPieces = cell.piece?.logo ? (
    <img
      draggable = {false}
      alt = ""
      src = {cell.piece.logo}
    ></img>
  ) : null;

  const showPiecesDraggable = cell.piece?.logo ? (
    <img
      draggable
      onDragStart = {() => dragStartHandler(cell)}
      onDragOver = {(e) => dragOverHandler(e)}
      onDrop = {(e) => dropHandler(e, cell)}
      alt = ""
      src = {cell.piece.logo}
    ></img>
  ) : null;

  const availableDots =
    cell.available && !cell.piece ? 
    <div className = {classes.available}></div> : "";

  const PieceUnderAttack = {
    background:
      cell.available && 
      cell.piece ? 
      classes.underAttack : "",
  };

  function dragStartHandler( cell: Cell) {
    setSelectedCell(cell);
  };

  function dragOverHandler(e: any) {
    e.preventDefault();
  };

  function dropHandler(e: any, cell: Cell) {
    e.preventDefault();
    if (selectedCell && selectedCell.piece && cell.available) {
      click(cell);
    }
  };

  if (cell.piece && cell.piece.color === currentPlayer!.color) {
    return (
      <div
        className={cellStyle}
        onClick={() => click(cell)}
        style={PieceUnderAttack}
      >
        {showPiecesDraggable}
        {availableDots}
      </div>
    );
  } else
    return (
      <div
        onDragStart={() => dragStartHandler( cell)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, cell)}
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
