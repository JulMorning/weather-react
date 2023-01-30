import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      date: "Sunday, 20:37",
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      realFeel: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
    console.log(response);


  }

  if (weatherData.ready) {
    return (
      <div className="weather">
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
        <h1 className="mt-3 mb-0">{weatherData.city}</h1>
        <p className="country">{weatherData.country}</p>
        <ul className="overview">
          <li>Last update: {weatherData.date}</li>
          <li className="text-capitalize"> {weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                width="60"
              />
              <div>
                <strong className="currentTemperature">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span className="units">°C</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Real feel:
                <strong className="strong">
                  <span> {Math.round(weatherData.realFeel)}º</span>
                </strong>
              </li>
              <li>
                Humidity:
                <strong className="strong">
                  <span> {weatherData.humidity}%</span>
                </strong>
              </li>
              <li>
                Wind:
                <strong className="strong">
                  <span> {Math.round(weatherData.wind)}km/h</span>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "16857deadta410be87f0339o286fddad";
    
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
