import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { NavbarListitemProps } from '../../../../types/Props/MainPageProps';
import cl from './NavbarListItem.module.scss';

const NavbarListItem: FC<NavbarListitemProps> = ({ text, href }) => {
	return (
		<li>
			<Link
				data-testid={href}
				className={cl.link}
				to={href}
			>
				{text}
			</Link>
		</li>
	);
};

export default memo(NavbarListItem);
