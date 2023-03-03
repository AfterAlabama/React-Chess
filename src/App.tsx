import { useState } from 'react';
import './App.scss';
import AppRouter from './components/Main Page/AppRouter';
import NavBar from './components/Main Page/NavBar';
import GitHubModal from './components/UI/Modal/GitHubModal';
import ReactDOM from 'react-dom';

function App() {
	const [visible, setVisible] = useState(false);

	const ModalComponent = () => {
		return (
			<GitHubModal
				visible={visible}
				setVisible={setVisible}
			/>
		);
	};

	const ModalPortal = ReactDOM.createPortal(
		<ModalComponent />,
		document.querySelector('#modalRoot') as HTMLElement
	);

	return (
		<>
			{ModalPortal}
			<NavBar setVisible={setVisible} />
			<AppRouter />
		</>
	);
}

export default App;
