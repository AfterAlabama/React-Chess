import cl from './Header.module.scss';
import HeaderPic from '../../../../assets/tablegame1.jpg';
import HeaderContent from '../HeaderContent/HeaderContent';

const Header = () => {
	return (
		<header className={cl.header}>
			<img
				alt='HeaderPic'
				src={HeaderPic}
				className={cl.headerImage}
			/>
			<HeaderContent />
		</header>
	);
};

export default Header;
