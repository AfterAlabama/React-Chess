import { Piece } from "../../game/Chess/Pieces/Piece";

export interface HeaderProps {
	clickHandler: () => void;
}

export interface LostGraphProps {
	pieces: Piece[];
}

export interface SectionGameProps {
	image: string;
	route: string;
}

export interface NavbarListitemProps {
	text: string;
	href: string;
}

export interface NavbarLogoProps {
	setVisible: (el: boolean) => void;
}