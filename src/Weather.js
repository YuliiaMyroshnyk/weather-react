import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      feels: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <input
              type="rearch"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
        <h1>{weatherData.city}</h1>
        <h2>{weatherData.country}</h2>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                className="float-left"
                alt="logo"
              />
              <span className="currentTemperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <div className="currentIndexes">
              <ul>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                <li>Humidity: {Math.round(weatherData.humidity)} %</li>
                <li>Real feel: {Math.round(weatherData.feels)} °C </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5ccco0ca11b8e4f4e0fbtd4305206aef";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
