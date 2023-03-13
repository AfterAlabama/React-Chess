import NavbarListItem from './NavbarListItem';
import cl from './NavbarList.module.scss';
import { RouteNames } from '../../../types/Enums/RouteNames';

const NavbarList = () => {
	return (
		<ul className={cl.ul}>
			<NavbarListItem
				text='MainPage'
				href={RouteNames.DEFAULT}
			/>
			<NavbarListItem
				text='Chess'
				href={RouteNames.CHESS}
			/>
			<NavbarListItem
				text='Checkers'
				href={RouteNames.CHECKERS}
			/>
		</ul>
	);
};

export default NavbarList;
