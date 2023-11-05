import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[5]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5ccco0ca11b8e4f4e0fbtd4305206aef";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
