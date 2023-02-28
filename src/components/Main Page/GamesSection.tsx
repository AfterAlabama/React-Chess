import { forwardRef } from "react";
import SectionContent from "../UI/SectionContent";
import cl from './GameSection.module.scss';
import SectionPic from '../../assets/wood.jpg';

const GamesSection = forwardRef<HTMLDivElement>((_, divRef) => {
  return (
    <section className={cl.section} >
      <article
        ref={divRef}
      >
        <img
          alt = ''
          className = {cl.sectionImage}
          src = {SectionPic}
        />
        <SectionContent
          cl={cl}
        />
      </article>
    </section>
  );
});

export default GamesSection;
