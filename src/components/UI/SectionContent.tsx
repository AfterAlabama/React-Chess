import { RouteNames } from "../../helpers/Enums/RouteNames";
import SectionGame from "./SectionGame";
import ChessPic from '../../assets/chesspic.jpg';
import CheckersPic from '../../assets/checkers.jpg';
import { FC } from "react";
import { SectionContentProps } from "../../helpers/Props/UIProps";

const SectionContent: FC<SectionContentProps> = ({ cl }) => {
  return (
    <section
      className={cl.sectionContent}
    >
      <h1>Choose Your Game</h1>
      <>
        <SectionGame
          cl={cl}
          image={ChessPic}
          route={RouteNames.CHESS}
        />
        <SectionGame
          cl={cl}
          image={CheckersPic}
          route={RouteNames.CHECKERS}
        />
      </>
    </section>
  );
};

export default SectionContent;
