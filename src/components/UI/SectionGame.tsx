import { FC } from "react";
import { Link } from "react-router-dom";
import { SectionGameProps } from "../../helpers/Props/UIProps";



const SectionGame: FC<SectionGameProps> = ({ cl, image, route }) => {
  return (
    <article className={cl.game} >
      <img
        alt = ''
        src = {image}
        className = {cl.chessImage}
      />
      <Link
        className={cl.bigBtn} to={route}>
        Play
      </Link>
    </article>
  );
};

export default SectionGame;
