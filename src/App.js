// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Slider title="Action" />
      <Slider title="Animation" />
    </div>
  );
}

export default App;
