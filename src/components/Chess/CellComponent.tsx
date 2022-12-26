import React, { FC} from "react";
import { CellProps } from "../../helpers/Props";
import { Cell } from "../../models/Chess/Cell";


const CellComponent: FC<CellProps> = ({ 
  cell, 
  selected, 
  click, 
  setSelectedCell,
  selectedCell,
  currentPlayer
}) => {

  const cellStyle = ["cell", cell.color, selected ? "selected" : ""].join(" ");

  const showPieces = cell.piece?.logo ? (
    <img 
      draggable = {false}
      onDragStart={e => dragStartHandler(e, cell)}
      onDragEnd = {e => dragEndHandler(e)}
      onDragLeave = {e => dragEndHandler(e)}
      onDragOver = {e => dragOverHandler(e, cell)}
      onDrop = {e => dropHandler(e, cell)} 
      id="pic" 
      alt="" 
      src={cell.piece.logo}
    ></img>
  ) : null;

  const showPiecesDrag = cell.piece?.logo ? (
    <img 
      draggable
      onDragStart={e => dragStartHandler(e, cell)}
      onDragEnd = {e => dragEndHandler(e)}
      onDragLeave = {e => dragEndHandler(e)}
      onDragOver = {e => dragOverHandler(e, cell)}
      onDrop = {e => dropHandler(e, cell)}
      id="pic" 
      alt="" 
      src={cell.piece.logo}
    ></img>
  ) : null;

  const availableDots =
    cell.available && !cell.piece ? <div className="available"></div> : "";

  const PieceUnderAttack = {
    background:
      cell.available && cell.piece ? 'radial-gradient(red, burlywood)' : "",
  };


  function dragStartHandler(e: any, cell: Cell){
    setSelectedCell(cell)
    
  };


  function dragEndHandler(e:any){};


  function dragOverHandler(e:any, cell: Cell){
    e.preventDefault()    
  }

  function dropHandler(e:any, cell: Cell){
    e.preventDefault()
    if(selectedCell && selectedCell.piece && cell.available){
      click(cell)
    }
  }



  if(cell.piece && cell.piece.color === currentPlayer?.color){
    return (
      <div
        
        className={cellStyle}
        onClick={() => click(cell)}
        style={PieceUnderAttack}
      >
        {showPiecesDrag}
        {availableDots}
      </div>
    );
  } else

  return (
    <div
      onDragStart={e => dragStartHandler(e, cell)}
      onDragEnd = {e => dragEndHandler(e)}
      onDragLeave = {e => dragEndHandler(e)}
      onDragOver = {e => dragOverHandler(e, cell)}
      onDrop = {e => dropHandler(e, cell)}
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
