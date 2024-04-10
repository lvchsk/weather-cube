import "./App.css";
import WeatherCube from "../components/WeatherCube";

function App() {
  return (
    <div className="app">
      <h1 className="title">Погода в Санкт-Петербурге</h1>
      <WeatherCube />
    </div>
  );
}

export default App;
