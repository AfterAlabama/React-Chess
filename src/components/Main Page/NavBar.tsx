import cl from './NavBar.module.scss';
import NavbarList from '../UI/Navbar/NavbarList';
import NavbarLogo from '../UI/Navbar/NavbarLogo';
import { useState } from 'react';
import GitHubModal from '../UI/Modal/GitHubModal';
import ReactDOM from 'react-dom';

const NavBar = () => {
	const [visible, setVisible] = useState(false);

	const ModalComponent = () => {
		return (
			<GitHubModal
				visible={visible}
				setVisible={setVisible}
			/>
		);
	};

	const ModalPortal = ReactDOM.createPortal(
		<ModalComponent />,
		document.querySelector('#modalRoot') as HTMLElement
	);
	return (
		<>
			{ModalPortal}
			<nav className={cl.nav}>
				<NavbarLogo setVisible={setVisible} />
				<NavbarList />
			</nav>
		</>
	);
};

export default NavBar;
