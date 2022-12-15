import React, { FC } from 'react'
import { lostprops } from '../../helpers/Props';

const LostPieces: FC<lostprops> = ({pieces, title}) => {

  return (
    <div className = "lost">
      <h3>{title}</h3>
      {pieces.map(piece => 
        <div key={piece.cell.id}>__{piece.name} {piece.logo && <img width={20} height = {20} alt="" src={piece.logo}></img>}</div>)}
    </div>
  )
}

export default LostPieces
