import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForcastDay">
      <div className="forecastDay">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={40} />

      <div className="forecastTemp">
        <span className="forecastTempMax">
          {Math.round(props.data.temperature.maximum)}°C
        </span>
        <span className="forecastTempMin">
          {Math.round(props.data.temperature.minimum)}°C
        </span>
      </div>
    </div>
  );
}
