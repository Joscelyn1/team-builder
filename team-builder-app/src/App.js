import React from "react";
import "./App.css";

import Header from "./components/Header.js";
import ListOfEmployees from "./components/ListOfEmployees.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <ListOfEmployees />
      <Footer />
    </div>
  );
}

export default App;
