import { Html } from "@react-three/drei";
import React, { useEffect } from "react";
import {
  addPropertiesToProps,
  parseWeatherData,
} from "../utils/weatherHelpers";
import weatherStore from "../store/weatherStore";
import { observer } from "mobx-react-lite";
import WeatherOtherDays from "./WeatherOtherDays";
import TodayWeather from "./TodayWeather";

const Box = observer(() => {
  const { getWeatherAction, weatherData } = weatherStore;
  useEffect(() => {
    getWeatherAction();
  }, []);

  if (weatherData.state === "pending" || weatherData.state === undefined) {
    return (
      <Html>
        <h1>Loading...</h1>
      </Html>
    );
  } else if (weatherData.state === "rejected") {
    return (
      <Html>
        <h1>Error</h1>
      </Html>
    );
  }
  const {
    todayLocalTimeString,
    todayWeatherList,
    currentWeather,
    otherDaysWeather,
  } = parseWeatherData(weatherData);

  const positionInfo = [
    {
      position: [0.51, 0, 0],
      rotation: [0, Math.PI / 2, 0],
      className: "right",
    },
    {
      position: [0, -0.51, 0],
      rotation: [Math.PI / 2, 0, 0],
      className: "bottom",
    },
    {
      position: [0, 0, -0.51],
      rotation: [0, Math.PI, 0],
      className: "back",
    },
    {
      position: [0, 0.51, 0],
      rotation: [Math.PI / 2, Math.PI, Math.PI],
      className: "top",
    },
    {
      position: [-0.51, 0, 0],
      rotation: [Math.PI / 2, -1.6, Math.PI / 2],
      className: "left",
    },
  ];

  const otherDaysWeatherWithPosition = addPropertiesToProps(
    otherDaysWeather,
    positionInfo
  );

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial color="rgb(67, 167, 234)" />
      <TodayWeather
        weather={todayWeatherList[0].weather[0]}
        time={todayLocalTimeString}
        currentWeather={currentWeather}
      />
      {otherDaysWeatherWithPosition.map((weather) => (
        <WeatherOtherDays weather={weather} key={weather.dt} />
      ))}
    </mesh>
  );
});

export default Box;
