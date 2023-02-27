import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteNames } from "../../helpers/RouteNames";
import Loader from "../UI/Loader";

const ChessBoard = lazy(() => import("../Chess/ChessBoard"));

const CheckersBoard = lazy(() => import("../Checkers/CheckersBoard"));

const MainPage = lazy(() => import("./MainPage"));

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
              </Loader>}
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
              </Loader>}>
            <ChessBoard />
          </Suspense>}
      />
      <Route
        path={RouteNames.CHECKERS}
        element={
          <Suspense
            fallback={
              <Loader>
                <h1>Loading...</h1>
              </Loader>}>
            <CheckersBoard />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
