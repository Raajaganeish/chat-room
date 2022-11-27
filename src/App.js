import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext } from "./context/contextAPI";
import ErrorPage from "./pages/404";
const App = () => {
  return (
    <BrowserRouter basename="/chat-room">
      <Routes>
        <Route path="/" exact element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const ProtectedRoute = ({ childern }) => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    return <Navigate to={"/login"} />;
  }
  return <> {childern}</>;
};
