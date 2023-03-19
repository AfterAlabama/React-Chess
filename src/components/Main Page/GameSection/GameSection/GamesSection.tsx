import { forwardRef } from 'react';
import SectionContent from '../SectionContent/SectionContent';
import cl from './GameSection.module.scss';
import SectionPic from '../../../../assets/wood.jpg';

const GamesSection = forwardRef<HTMLDivElement>((_, divRef) => {
	return (
		<div
			className={cl.section}
			ref={divRef}
		>
			<img
				alt='sectionImage'
				className={cl.sectionImage}
				src={SectionPic}
			/>
			<SectionContent />
		</div>
	);
});

export default GamesSection;
