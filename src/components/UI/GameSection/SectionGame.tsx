import { FC } from 'react';
import { SectionGameProps } from '../../../helpers/Props/UIProps';
import LinkButton from '../Generic/LinkButton';
import cl from './SectionGame.module.scss';

const SectionGame: FC<SectionGameProps> = ({ image, route }) => {
	return (
		<article className={cl.game}>
			<img
				alt='sectionImage'
				src={image}
				className={cl.circularImage}
			/>
			<LinkButton
				route={route}
				text='Play'
			/>
		</article>
	);
};

export default SectionGame;
