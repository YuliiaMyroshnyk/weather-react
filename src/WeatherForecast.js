import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecastDay">Thu</div>
            <div className="forecastIcon">
              <img src={forecast[0].condition.icon_url} />
            </div>
            <div className="forecastTemp">
              <span className="forecastTempMax">
                {forecast[0].temperature.maximum}
              </span>
              <span className="forecastTempMin">
                {forecast[0].temperature.minimum}
              </span>
            </div>
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
