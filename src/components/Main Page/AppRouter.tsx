import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteNames } from "../../helpers/RouteNames";
import CheckersBoard from "../Checkers/CheckersBoard";
import ChessBoard from "../Chess/ChessBoard";
import MainPage from "./MainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route 
        path = {RouteNames.DEFAULT}
        element = {<MainPage />} 
      />
      <Route 
        path = {RouteNames.CHESS} 
        element = {<ChessBoard />} 
      />
      <Route 
        path = {RouteNames.CHECKERS} 
        element = {<CheckersBoard />} 
      />
    </Routes>
  );
};

export default AppRouter;
