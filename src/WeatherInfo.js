import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>{props.data.country}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            {<img src={props.data.iconUrl} className="float-left" alt="logo" />}
            <span className="currentTemperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <div className="currentIndexes">
            <ul>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li>Humidity: {Math.round(props.data.humidity)} %</li>
              <li>Real feel: {Math.round(props.data.feels)} °C </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
