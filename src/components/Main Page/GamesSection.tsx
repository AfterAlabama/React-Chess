import { forwardRef } from 'react';
import SectionContent from '../UI/GameSection/SectionContent';
import cl from './GameSection.module.scss';
import SectionPic from '../../assets/wood.jpg';

const GamesSection = forwardRef<HTMLDivElement>((_, divRef) => {
	return (
		<section className={cl.section}>
			<article ref={divRef}>
				<img
					alt='sectionImage'
					className={cl.sectionImage}
					src={SectionPic}
				/>
				<SectionContent />
			</article>
		</section>
	);
});

export default GamesSection;
