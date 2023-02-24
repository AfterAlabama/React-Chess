
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteNames } from "../../helpers/RouteNames";
import MainPage from "./MainPage";

const ChessBoard = lazy(() => import("../Chess/ChessBoard"));

const CheckersBoard = lazy(() => import("../Checkers/CheckersBoard"));

const AppRouter = () => {
  return (
    <Routes>
      <Route 
        path = {RouteNames.DEFAULT}
        element = {<MainPage />} 
      />
      <Route 
        path = {RouteNames.CHESS} 
        element = {
        <Suspense>
          <ChessBoard />
        </Suspense>}
      />
      <Route 
        path = {RouteNames.CHECKERS} 
        element = {
          <Suspense>
            <CheckersBoard />
          </Suspense>
        } 
      />
    </Routes>
  );
};

export default AppRouter;
