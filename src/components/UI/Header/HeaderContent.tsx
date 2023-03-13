import { FC } from 'react';
import { HeaderProps } from '../../../types/Props/MainPageProps';
import cl from './HeaderContent.module.scss';

const HeaderContent: FC<HeaderProps> = ({ clickHandler }) => {
	return (
		<article className={cl.headerContent}>
			<h1>Games For Everyone!</h1>
			<p>Wish to play a game? Choose which:</p>
			<button
				className={cl.btn}
				onClick={clickHandler}
			>
				Games
			</button>
		</article>
	);
};

export default HeaderContent;
