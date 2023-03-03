import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavbarListitemProps } from '../../../helpers/Props/UIProps';
import cl from './NavbarListItem.module.scss';

const NavbarListItem: FC<NavbarListitemProps> = ({ text, href }) => {
	return (
		<li>
			<Link
				className={cl.link}
				to={href}
			>
				{text}
			</Link>
		</li>
	);
};

export default NavbarListItem;
