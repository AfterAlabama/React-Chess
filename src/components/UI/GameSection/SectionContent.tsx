import { RouteNames } from '../../../types/Enums/RouteNames';
import SectionGame from './SectionGame';
import ChessPic from '../../../assets/chesspic.jpg';
import CheckersPic from '../../../assets/checkers.jpg';
import cl from './SectionContent.module.scss';

const SectionContent = () => {
	return (
		<section className={cl.sectionContent}>
			<h1>Choose Your Game</h1>
			<>
				<SectionGame
					image={ChessPic}
					route={RouteNames.CHESS}
				/>
				<SectionGame
					image={CheckersPic}
					route={RouteNames.CHECKERS}
				/>
			</>
		</section>
	);
};

export default SectionContent;
