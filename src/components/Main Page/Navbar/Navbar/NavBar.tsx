import cl from './NavBar.module.scss';
import NavbarList from '../NavbarList/NavbarList';
import NavbarLogo from '../NavbarLogo/NavbarLogo';

const NavBar = () => {
	return (
		<>
			<nav className={cl.nav}>
				<NavbarLogo />
				<NavbarList />
			</nav>
		</>
	);
};

export default NavBar;
