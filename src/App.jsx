import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes";
import { CssBaseline } from "@mui/material";

function App() {
 
  return (
    <Router> <CssBaseline />
      <div id="app" style={{ height: "100vh", width: '100%', }}>
          <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
