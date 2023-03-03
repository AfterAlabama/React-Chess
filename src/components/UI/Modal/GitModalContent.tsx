import { FC } from 'react';
import { ModalContentProps } from '../../../helpers/Props/UIProps';

const GitModalContent: FC<ModalContentProps> = ({ setVisible }) => {
	return (
		<>
			<h3>Liked our content? Look for more:</h3>
			<a
				href='https://github.com/AfterAlabama?tab=repositories'
				target='_blank'
				rel='noopener noreferrer'
				onClick={() => setVisible(false)}
			>
				To GitHub
			</a>
		</>
	);
};

export default GitModalContent;
