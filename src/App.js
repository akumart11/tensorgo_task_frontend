import React from "react";
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <UserDetails />
      </div>
    </div>
  );
};

export default App;
