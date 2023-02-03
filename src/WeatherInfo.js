import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-3 mb-0">{props.data.city}</h1>
      <p className="country">{props.data.country}</p>

      <div className="row ">
        <div className="col-sm-5">
          <div className="d-flex">
            <div className="WeatherIcon">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemp celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <ul className="overview">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize"> {props.data.description}</li>
          </ul>
        </div>

        <div className="col-sm-4">
          <ul>
            <li>
              Real feel:
              <strong className="strong">
                <span> {Math.round(props.data.realFeel)}˚</span>
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
