import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkButtonProps } from '../../../types/Props/UIProps';
import cl from './LinkButton.module.scss';

const LinkButton: FC<LinkButtonProps> = ({ route, text }) => {
	return (
		<Link
			className={cl.bigBtn}
			to={route}
		>
			{text}
		</Link>
	);
};

export default LinkButton;
