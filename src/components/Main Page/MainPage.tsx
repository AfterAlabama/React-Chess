import { useRef } from 'react';
import GamesSection from './GamesSection';
import Header from './Header';
import logo1 from '../../assets/chessOverlay.jpg';
import logo2 from '../../assets/tablegame1.jpg';
import useImagePreloader from '../../hooks/imagePreloader';

const MainPage = () => {
	const divRef = useRef<HTMLDivElement>(null!);
	const { imagesPreloaded } = useImagePreloader([logo1, logo2]);

	function clickHandler() {
		divRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<>
			{imagesPreloaded && (
				<>
					<Header clickHandler={clickHandler} />
					<GamesSection ref={divRef} />
				</>
			)}
		</>
	);
};

export default MainPage;
