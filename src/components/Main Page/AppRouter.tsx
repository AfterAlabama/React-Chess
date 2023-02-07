
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteNames } from "../../helpers/RouteNames";
import CheckersBoard from "../Checkers/CheckersBoard";
import MainPage from "./MainPage";

const ChessBoard = lazy(() => import("../Chess/ChessBoard"));

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
        element = {<CheckersBoard />} 
      />
    </Routes>
  );
};

export default AppRouter;
