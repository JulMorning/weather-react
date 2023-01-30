import React from "react";
import axios from "axios";
import "./App.css";

export default function WeatherInfo() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city name"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="search-button" />
          </div>
        </div>
      </form>
      <h1 className="mt-3 mb-0">Kyiv</h1>
      <p className="country">Ukraine</p>
      <ul className="overview">
        <li>Last update: Sunday, 20:37</li>
        <li>Snow</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/cloudy.png"
              alt="Snow"
              width="60"
            />
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
              <strong className="strong">
                <span> -6º</span>
              </strong>
            </li>
            <li>
              Humidity:
              <strong className="strong">
                <span> 89%</span>
              </strong>
            </li>
            <li>
              Wind:
              <strong className="strong">
                <span> 1 km/h</span>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
