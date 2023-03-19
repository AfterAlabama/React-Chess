import { useState } from 'react';
import GitHubModal from '../../../Modal/GitHubModal/GitHubModal';
import Modal from '../../../Modal/Modal';
import cl from './NavbarLogo.module.scss';

const NavbarLogo = () => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<div
				data-testid='logo'
				className={cl.logo}
				onClick={() => setVisible(true)}
			>
				<span className={cl.coral}>Chess</span>zardo
			</div>
			<Modal data-testid='modal'>
				<GitHubModal
					visible={visible}
					setVisible={setVisible}
				/>
			</Modal>
		</>
	);
};

export default NavbarLogo;
