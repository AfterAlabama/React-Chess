import { FC } from 'react';
import ReactDOM from 'react-dom';
import { ChildrenOnlyProps } from '../../types/Props/UIProps';

const Modal: FC<ChildrenOnlyProps> = ({ children }) => {
	const modal = document.createElement('div');
	modal.setAttribute('id', 'modalRoot');
	document.body.append(modal)

	return ReactDOM.createPortal(
		<>{children}</>,
		(document.getElementById('modalRoot') as HTMLElement)
	);
};

export default Modal;
