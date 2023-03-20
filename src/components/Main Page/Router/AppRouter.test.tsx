import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import CheckersBoard from '../../Checkers/CheckersBoard/CheckersBoard';
import ChessBoard from '../../Chess/ChessBoard/ChessBoard';
import MainPage from '../MainPage';

describe('React Router', () => {
	test('Testing Main Page Link', () => {
		render(
			<MemoryRouter>
				<App />
				<MainPage />
			</MemoryRouter>
		);

		const mainPage = screen.getByTestId('mainPage');
		const mainLink = screen.getByTestId('/');

		userEvent.click(mainLink);
		expect(mainPage).toBeInTheDocument();
	});

	test('Testing Chess Link', () => {
		render(
			<MemoryRouter>
				<App />
				<ChessBoard />
			</MemoryRouter>
		);

		const chess = screen.getByTestId('chess');
		const chessLink = screen.getByTestId('/chess');

		userEvent.click(chessLink);
		expect(chess).toBeInTheDocument();
	});

	test('Testing Checkers Link', () => {
		render(
			<MemoryRouter>
				<App />
				<CheckersBoard />
			</MemoryRouter>
		);

		const checkers = screen.getByTestId('checkers');
		const checkersLink = screen.getByTestId('/checkers');

		userEvent.click(checkersLink);
		expect(checkers).toBeInTheDocument();
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
