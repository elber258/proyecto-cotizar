import React from "react";
import "./assets/css/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Home, Register, Dashboard } from "./pages";
import AuthProvider from "./Auth/AuthCtx";
import Footer from "components/footer/Footer";
import Layout from "components/layout/Layout";
import RequireAuth from "Auth/auth";

//import RequireAuth from './Auth/Auth.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
