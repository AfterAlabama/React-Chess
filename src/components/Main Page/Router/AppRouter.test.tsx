import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import CheckersBoard from '../../Checkers/CheckersBoard/CheckersBoard';
import ChessBoard from '../../Chess/ChessBoard/ChessBoard';
import MainPage from '../MainPage';

describe('React Router', () => {
	test('Testing Route Links', () => {
		render(
			<MemoryRouter>
				<App />
				<MainPage />
				<ChessBoard />
				<CheckersBoard />
			</MemoryRouter>
		);

		const mainPage = screen.getByTestId('mainPage');
		const chess = screen.getByTestId('chess');
		const mainLink = screen.getByTestId('/');
		const chessLink = screen.getByTestId('/chess');
		const checkers = screen.getByTestId('checkers');
		const checkersLink = screen.getByTestId('/checkers');

		userEvent.click(mainLink);
		expect(mainPage).toBeInTheDocument();

		userEvent.click(checkersLink);
		expect(checkers).toBeInTheDocument();

		userEvent.click(chessLink);
		expect(chess).toBeInTheDocument();
	});

	test('Testing Nonexistent Route Links', () => {
		render(
			<MemoryRouter initialEntries={['/lalala']}>
				<App />
			</MemoryRouter>
		);

		const notFound = screen.getByTestId('notFound');

		expect(notFound).toBeInTheDocument();
	});
});
