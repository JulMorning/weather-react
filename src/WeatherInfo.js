import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-3 mb-0">{props.data.city}</h1>
      <p className="country">{props.data.country}</p>
      <ul className="overview">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <WeatherIcon code={props.data.icon}/>
            <div>
              <strong className="currentTemperature">
                {Math.round(props.data.temperature)}
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
                <span> {Math.round(props.data.realFeel)}º</span>
              </strong>
            </li>
            <li>
              Humidity:
              <strong className="strong">
                <span> {props.data.humidity}%</span>
              </strong>
            </li>
            <li>
              Wind:
              <strong className="strong">
                <span> {Math.round(props.data.wind)} km/h</span>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
