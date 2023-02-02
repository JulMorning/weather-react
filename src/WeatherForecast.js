import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(resonse) {
    console.log(resonse.data);
  }
  const apiKey = "16857deadta410be87f0339o286fddad";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day mb-1">Thu</div>

          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19˚</span>
            <span className="WeatherForecast-temp-min">10˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
