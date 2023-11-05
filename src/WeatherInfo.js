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
      <div className="currentIndexes">
        <div className="row">
          <div className="col-4">Wind: {Math.round(props.data.wind)} km/h</div>
          <div className="col-4">
            Humidity: {Math.round(props.data.humidity)} %
          </div>
          <div className="col-4">
            Real feel: {Math.round(props.data.feels)} °C
          </div>
        </div>
      </div>
    </div>
  );
}
