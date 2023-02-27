import { RouteNames } from "../../helpers/RouteNames";
import SectionGame from "./SectionGame";

const SectionContent = ({ classes }: any) => {
  return (
    <div
      className={classes.sectionContent}
    >
      <h1>Choose Your Game</h1>
      <>
        <SectionGame
          classes={classes}
          image={classes.chessImage}
          route={RouteNames.CHESS}
        />
        <SectionGame
          classes={classes}
          image={classes.checkersImage}
          route={RouteNames.CHECKERS}
        />
      </>
    </div>
  );
};

export default SectionContent;
