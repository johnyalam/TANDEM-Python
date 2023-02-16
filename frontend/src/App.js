import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { TandemProvider } from "./context/Context";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import VideoPlayScreen from "./screens/VideoPlayScreen";

function App() {
  return (
    <TandemProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/country" element={<HomeScreen />} />
            <Route path="/category" element={<CategoryScreen />} exact />
            <Route path="/video" element={<VideoPlayScreen />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </TandemProvider>
  );
}

export default App;
