import React from "react";
import axios from "axios";

function App() {

  const url= `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
