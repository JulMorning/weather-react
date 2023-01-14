import React from "react";
import "./App.css";

export default function CurrentWeatherInfo() {
  let currentWeatherInfo = {
    realFeel: "-8°",
    humidity: "80%",
    windSpeed: "2 km/h",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/cloudy.png",
  };
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={currentWeatherInfo.imgUrl} alt="Snow" width="60" />
            <div>
              <strong className="currentTemperature">-1</strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>
              Real feel:
              <strong>
                <span> {currentWeatherInfo.realFeel}</span>
              </strong>
            </li>
            <li>
              Humidity:
              <strong>
                <span> {currentWeatherInfo.humidity}</span>
              </strong>
            </li>
            <li>
              Wind:
              <strong>
                <span> {currentWeatherInfo.windSpeed}</span>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
