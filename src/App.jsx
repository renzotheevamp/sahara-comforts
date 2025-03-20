import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import ExploreDesigns from "./pages/ExploreDesigns";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Homepage />} />
        <Route path="/explore-our-designs" element={<ExploreDesigns />} />
      </Routes>
    </Router>
  );
}

export default App;
