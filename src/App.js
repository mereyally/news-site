import "./App.css";
import Layout from "./layouts/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/general" />} />
            <Route path="/:newsID" element={<Layout />} />
            <Route path="/general" element={<Layout />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
