import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // The corrected and improved JSX from your App.jsx
  return !loading ? (
    <div className="flex min-h-screen flex-col bg-gray-500">
      <Header />
      <main className="flex-grow *:flex flex-col items-center justify-center bg-gray-100 text-gray-800">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    /* A loading indicator is better for UX than null */
    <div className="flex min-h-screen items-center justify-center">
      <p className="font-bold">Loading...</p>
    </div>
  );
}

export default App;
