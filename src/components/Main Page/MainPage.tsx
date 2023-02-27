import { useRef } from "react";
import GamesSection from "./GamesSection";
import Header from "./Header";


const MainPage = () => {
  const divRef = useRef<HTMLDivElement>(null!);


  function clickHandler() {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header clickHandler={clickHandler} />
      <GamesSection ref={divRef} />
    </>
  );
};

export default MainPage;
