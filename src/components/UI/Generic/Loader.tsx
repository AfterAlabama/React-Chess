import { FC } from 'react';
import { LoaderProps } from '../../../helpers/Props/UIProps';
import cl from './Loader.module.scss';

const Loader: FC<LoaderProps> = ({ children }) => {
	return (
		<div className={cl.container}>
			{children}
			<article className={cl.loader} />
		</div>
	);
};

export default Loader;
