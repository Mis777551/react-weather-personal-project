import React from "react";
import axios from "axios";

function App() {

  const url= `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
  return (
    <div className="app">
      <div className="container"></div>
      <div className="top">
        <div className="location">
          <p>Dallas</p>
        </div>
        <div className="temp">
          <h1>60 °F</h1>
        </div>
        <div className="description">
          <p>clouds</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p className="bold">65 °F</p>
          <p>Feels like</p>
        </div>
        <div className="humidity">
         <p className="bold">20%</p>
         <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">12MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
