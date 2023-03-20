import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteNames } from '../../../types/Enums/RouteNames';
import Loader from '../../Generic/Loader/Loader';
import NotFound from '../../Generic/NotFound/NotFound';

const ChessBoard = lazy(() => import('../../Chess/ChessBoard/ChessBoard'));

const CheckersBoard = lazy(
	() => import('../../Checkers/CheckersBoard/CheckersBoard')
);

const MainPage = lazy(() => import('../MainPage'));

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path={RouteNames.DEFAULT}
				element={
					<Suspense
						fallback={
							<Loader>
								<h1>Loading...</h1>
							</Loader>
						}
					>
						<MainPage />
					</Suspense>
				}
			/>
			<Route
				path={RouteNames.CHESS}
				element={
					<Suspense
						fallback={
							<Loader>
								<h1>Loading...</h1>
							</Loader>
						}
					>
						<ChessBoard />
					</Suspense>
				}
			/>
			<Route
				path={RouteNames.CHECKERS}
				element={
					<Suspense
						fallback={
							<Loader>
								<h1>Loading...</h1>
							</Loader>
						}
					>
						<CheckersBoard />
					</Suspense>
				}
			/>
			<Route
				path = '*'
				element= {<NotFound />}
			/>
		</Routes>
	);
};

export default AppRouter;
