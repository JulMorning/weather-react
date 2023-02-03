import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      description: response.data.condition.description,
      realFeel: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
    console.log(response.data)
  }

  function search() {
    const apiKey = "16857deadta410be87f0339o286fddad";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form className="search-form"onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city name"
                className="form-control"
                autoFocus="off"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="search-button" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
