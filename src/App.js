import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Dashboard } from "./components/dashboard";
import { useEffect, useState } from "react";
import axios from "./axios";
import { useAuth } from "./hooks/auth";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ redirect, children }) => {
  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const { user, isAuthenticated } = useAuth();

  // const fetchUser = async () => {
  //   const response = await axios.get("http://localhost:5000/api/v1/checkAuth");

  //   console.log("Status: ", response);

  //   if (response.status === 200) {
  //     localStorage.setItem("user", JSON.stringify(response.data.user));
  //   }
  // };

  useEffect(() => {
    // if (isAuthenticated) return;
    // fetchUser();
  }, []);

  console.log("Auth: ", isAuthenticated);

  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<AccountBox />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute redirect={!isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
