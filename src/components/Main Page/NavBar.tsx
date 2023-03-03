import { FC } from 'react';
import { NavProps } from '../../helpers/Props/MainPageProps';
import cl from './NavBar.module.scss';
import NavbarList from '../UI/Navbar/NavbarList';
import NavbarLogo from '../UI/Navbar/NavbarLogo';

const NavBar: FC<NavProps> = ({ setVisible }) => {
	return (
		<nav className={cl.nav}>
			<NavbarLogo setVisible={setVisible} />
			<NavbarList />
		</nav>
	);
};

export default NavBar;
