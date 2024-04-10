import { Html } from "@react-three/drei";
import React from "react";
import { weatherInfo } from "../utils/weatherHelpers";

const WeatherOtherDays = ({ weather }) => {
  const { day, weatherRound, description } = weatherInfo(weather);
  return (
    <Html
      className={weather.className}
      occlude
      position={weather.position}
      rotation={weather.rotation}
      distanceFactor={1.5}
      transform
    >
      <div className="weather_other_days card">
        <h1 className="day">{day.toUpperCase()}</h1>
        <p className="temp">{weatherRound} °C</p>
        <img
          className="img"
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Погода"
        />
        <p className="info">{description}</p>
      </div>
    </Html>
  );
};

export default WeatherOtherDays;
