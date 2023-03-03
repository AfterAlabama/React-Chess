import { FC } from 'react';
import { NavbarLogoProps } from '../../../helpers/Props/UIProps';
import cl from './NavbarLogo.module.scss';

const NavbarLogo: FC<NavbarLogoProps> = ({ setVisible }) => {
	return (
		<article
			className={cl.logo}
			onClick={() => setVisible(true)}
		>
			<span className={cl.coral}>Chess</span>zardo
		</article>
	);
};

export default NavbarLogo;
