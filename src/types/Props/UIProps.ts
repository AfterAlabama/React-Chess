import { ReactNode } from 'react';

export interface ModalProps {
	visible: boolean;
	setVisible: (el: boolean) => void;
}

export type ModalContentProps = Pick<ModalProps, 'setVisible'>

export interface LinkButtonProps {
	route: string;
	text: string;
}

export interface ChildrenOnlyProps {
	children: ReactNode;
}


