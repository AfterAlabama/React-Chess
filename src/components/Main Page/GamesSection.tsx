import React, { forwardRef } from "react";
import SectionContent from "../UI/SectionContent";
import classes from './GameSection.module.scss';

const GamesSection = forwardRef<HTMLDivElement>((_, divRef) => {
  return (
    <section className = {classes.section} >
      <div 
        ref = {divRef} 
        className = {classes.sectionImage}
      >
      <SectionContent 
        classes = {classes} 
      />
      </div>
      
    </section>
  );
});

export default GamesSection;
