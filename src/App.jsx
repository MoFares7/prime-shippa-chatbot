import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar/nav";

function App() {
 
  return (
    <Router>
      <div id="app" style={{ height: "100vh", width: '100%', }}>
        <Navbar />
          <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
