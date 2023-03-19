import { FC } from 'react';
import { ChildrenOnlyProps } from '../../../types/Props/UIProps';
import cl from './Loader.module.scss';

const Loader: FC<ChildrenOnlyProps> = ({ children }) => {
	return (
		<div className={cl.container}>
			{children}
			<article className={cl.loader} />
		</div>
	);
};

export default Loader;
