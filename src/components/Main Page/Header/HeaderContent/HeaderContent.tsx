import { useContext } from 'react';
import { HeaderContext } from '../../MainPage';
import cl from './HeaderContent.module.scss';

const HeaderContent = () => {
	const { clickHandler } = useContext(HeaderContext)
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
