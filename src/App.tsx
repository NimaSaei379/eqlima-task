import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./page/main/MainPage";
import LoginPage from "./page/login/LoginPage";
import { useState } from "react";
import { AuthProvider, useAuth } from "./hooks/useAuthorize";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}

function App() {
  return (
    <div className="bg-primary1 h-screen flex flex-col relative">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
