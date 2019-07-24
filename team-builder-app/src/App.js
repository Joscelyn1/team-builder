import React from "react";
import "./App.css";

import Header from "./components/Header.js";
import NewEmployee from "./components/NewEmployee.js";
import ListOfEmployees from "./components/ListOfEmployees.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <NewEmployee />
      <ListOfEmployees />
      <Footer />
    </div>
  );
}

export default App;
