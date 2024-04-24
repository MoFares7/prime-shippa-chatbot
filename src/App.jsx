import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
 
  return (
    <Router>
      <div id="app" style={{ height: "100vh", width: '100%', }}>
          <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
