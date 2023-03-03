import { ReactNode } from 'react';
import { Piece } from '../../models/Chess/Pieces/Piece';

export interface LostGraphProps {
	pieces: Piece[];
}

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

export interface SectionGameProps {
	image: string;
	route: string;
}

export interface LinkButtonProps {
	route: string;
	text: string;
}

export interface NavbarListitemProps {
	text: string;
	href: string;
}

export interface NavbarLogoProps {
	setVisible: (el: boolean) => void
}
