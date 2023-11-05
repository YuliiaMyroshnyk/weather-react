import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>{props.data.country}</h2>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="currentIndexes">
            <ul>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li>Humidity: {Math.round(props.data.humidity)} %</li>
              <li>Real feel: {Math.round(props.data.feels)} °C </li>
            </ul>
          </div>
        </div>

        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <WeatherTemperature celsius={Math.round(props.data.temperature)} />
          </div>
        </div>
      </div>
    </div>
  );
}
