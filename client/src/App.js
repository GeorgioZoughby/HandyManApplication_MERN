import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar/Sidebar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import AlertBanner from "./pages/AlertBanner/AlertBanner";
import Login from "./pages/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <AlertBanner />
              <Sidebar />
              <Home />
              <Footer />
            </>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/services" element=
          {
            <>
              <AlertBanner />
              <Sidebar />
              <Home />
              <Footer />
            </>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;