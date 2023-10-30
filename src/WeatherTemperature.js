import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="currentTemperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </span>
  );
}
