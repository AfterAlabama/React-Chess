import { FC } from 'react';
import { HeaderProps } from '../../types/Props/MainPageProps';
import cl from './Header.module.scss';
import HeaderPic from '../../assets/tablegame1.jpg';
import HeaderContent from '../UI/Header/HeaderContent';

const Header: FC<HeaderProps> = ({ clickHandler }) => {
	return (
		<header className={cl.header}>
			<img
				alt='HeaderPic'
				src={HeaderPic}
				className={cl.headerImage}
			/>
			<HeaderContent clickHandler={clickHandler} />
		</header>
	);
};

export default Header;
