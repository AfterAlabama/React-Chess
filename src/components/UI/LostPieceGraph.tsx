import { FC } from "react";
import { LostGraphProps } from "../../helpers/Props/UIProps";


const LostPieceGraph: FC<LostGraphProps> = ({ pieces, cl }) => {
  return (
    <>
      {pieces.map((piece) => (
        <section
          className={cl.pieceText}
          key={piece.cell.id}
        >
          __{piece.name}
          {piece.logo && (
            <img
              className={cl.pieceImg}
              alt=""
              src={piece.logo}
            ></img>
          )}
        </section>
      ))}
    </>
  );
};

export default LostPieceGraph;
