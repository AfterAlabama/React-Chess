import { ReactNode } from 'react';

export interface LoaderProps {
	children: ReactNode;
}

export interface ModalProps {
	visible: boolean;
	setVisible: (el: boolean) => void;
}

export interface ModalContentProps {
	setVisible: (el: boolean) => void;
}

export interface LinkButtonProps {
	route: string;
	text: string;
}

export interface ChildrenOnlyProps {
	children: ReactNode;
}


