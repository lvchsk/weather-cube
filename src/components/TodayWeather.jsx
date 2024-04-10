import { Html } from "@react-three/drei";
import React from "react";

const TodayWeather = ({ weather, time, currentWeather }) => {
  return (
    <Html
      className="front"
      occlude
      position={[0, 0, 0.51]}
      distanceFactor={1.5}
      transform
    >
      <div className="weather_container card">
        <h1>Сейчас</h1>
        <p className="current_time">{time}</p>
        <p className="current_temp">{currentWeather} °C</p>
        <img
          className="img_current"
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="Погода"
        />
        <p className="info">{weather.description}</p>
      </div>
    </Html>
  );
};

export default TodayWeather;
