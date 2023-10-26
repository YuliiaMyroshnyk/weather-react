import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "5ccco0ca11b8e4f4e0fbtd4305206aef";
  let city = "London";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
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
      <h1>Kyiv</h1>
      <h2>Ukraine</h2>
      <ul>
        <li>Wednesday 01:01</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              className="float-left"
            />
            <span className="currentTemperature">17</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div class="col-6">
          <div className="currentIndexes">
            <ul>
              <li>Wind: 5 km/h</li>
              <li>Humidity: 50 %</li>
              <li>Real feel: 34°C </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
