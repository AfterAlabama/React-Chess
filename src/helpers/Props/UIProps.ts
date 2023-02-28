import { ReactNode } from "react";
import { Piece } from "../../models/Chess/Pieces/Piece";

export interface LostGraphProps {
  pieces: Piece[];
  cl: {
    [key:string]:string
  };
}

export interface LoaderProps {
  children: ReactNode
}

export interface ModalProps {
  visible: boolean;
  setVisible: (el: boolean) => void;
}

export interface ModalContentProps {
  setVisible: (el: boolean) => void;
}

export interface SectionContentProps {
  cl: {
    [key:string]: string
  }
}

export interface SectionGameProps {
  image: string;
  route: string;
  cl: {
    [key:string]:string
  }
}