import React from "react";
import Page from "./BackgroundToggle/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="btoggle" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
