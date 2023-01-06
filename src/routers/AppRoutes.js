import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HacerReservaPage from "../pages/HacerReservaPage";
import VerReservasPage from "../pages/VerReservasPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservar" element={<HacerReservaPage />} />
      <Route path="/registro" element={<VerReservasPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
