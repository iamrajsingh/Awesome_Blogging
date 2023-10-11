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

  const gettingCurrentUser = async() => {
   await authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log("run");
          dispatch(login({ userData }));
        } else {
          console.log("not run");
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    gettingCurrentUser()
  }, []);

  return !loading ? (
    <div className=" w-full h-screen">
      <Header />
      <main className="h-max relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
