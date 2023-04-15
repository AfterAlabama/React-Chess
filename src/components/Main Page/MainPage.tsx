import { createContext, useRef } from 'react';
import GamesSection from './GameSection/GameSection/GamesSection';
import Header from './Header/Header/Header';
import logo1 from '../../assets/chessOverlay.jpg';
import logo2 from '../../assets/tablegame1.jpg';
import useImagePreloader from '../../hooks/imagePreloader';

type HeaderContextProp = {
	clickHandler: () => void;
};

export const HeaderContext = createContext<HeaderContextProp>(null!);

const MainPage = () => {
	const divRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const { imagesPreloaded } = useImagePreloader([logo1, logo2]);
	
	function clickHandler() {
		divRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	const ImagesPreloadCondition = imagesPreloaded && (
		<>
			<HeaderContext.Provider value={{ clickHandler }}>
				<Header />
			</HeaderContext.Provider>
			<GamesSection ref={divRef} />
		</>
	);

	return <div data-testid='mainPage'>{ImagesPreloadCondition}</div>;
};

export default MainPage;
