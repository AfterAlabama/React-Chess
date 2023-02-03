import { lostGraphProps } from "../../helpers/Props";



const LostPieceGraph = ({pieces, classes}: lostGraphProps) => {
  return (
    <div>
      {pieces.map((piece) => (
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
  ))}
    </div>
  )
}

export default LostPieceGraph
