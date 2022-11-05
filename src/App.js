import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/contact"} element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

