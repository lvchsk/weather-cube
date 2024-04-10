export const parseWeatherData = (weatherData) => {
  const cityTimezoneOffsetSeconds = weatherData.value.city.timezone;
  const today = new Date();
  const todayLocalTime = new Date(
    today.getTime() + cityTimezoneOffsetSeconds * 1000
  );
  const todayLocalDateString = todayLocalTime.toISOString().split("T")[0];
  const todayLocalTimeString = todayLocalTime
    .toISOString()
    .split("T")[1]
    .slice(0, -8);

  const todayWeatherList = weatherData.value.list.filter(
    (item) => item.dt_txt.split(" ")[0] === todayLocalDateString
  );
  const currentWeather = Math.round(todayWeatherList[0].main.temp);

  const otherDaysWeather = weatherData.value.list.filter(
    (item) =>
      item.dt_txt.includes("15:00:00") &&
      item.dt_txt.split(" ")[0] !== todayLocalDateString
  );
  return {
    todayLocalTimeString,
    todayWeatherList,
    currentWeather,
    otherDaysWeather,
  };
};

export const weatherInfo = (weather) => {
  const weatherRound = Math.round(weather.main.temp);
  const description = weather.weather[0].description;
  const date = weather.dt_txt.split(" ")[0];
  const day = new Date(date).toLocaleString("ru-RU", { weekday: "short" });
  return {
    day,
    weatherRound,
    description,
  };
};

export const addPropertiesToProps = (weatherList, additionalData) => {
  return weatherList.map((weather, index) => {
    return {
      ...weather,
      position: additionalData[index].position,
      rotation: additionalData[index].rotation,
      className: additionalData[index].className,
    };
  });
};
