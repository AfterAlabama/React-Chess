import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import CheckersBoard from "../Checkers/CheckersBoard";
import ChessBoard from "../Chess/ChessBoard";
import MainPage from "./MainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path="/chess" element={<ChessBoard />} />
      <Route path="/checkers" element={<CheckersBoard />} />
      <Route path = "/*" element={<Navigate to = "/"/>} />
    </Routes>
  );
};

export default AppRouter;
