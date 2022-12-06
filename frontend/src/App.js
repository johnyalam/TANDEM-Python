import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CountryScreen from "./screens/CountryScreen";
import VideoPlayScreen from "./screens/VideoPlayScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/country" element={<CountryScreen />} />
          <Route path="/category" element={<CategoryScreen />} exact />
          <Route path="/video" element={<VideoPlayScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
