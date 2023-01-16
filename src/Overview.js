import React from "react";
import "./App.css";

export default function Overview() {
  let overview = {
    city: "Kyiv",
    country: "Ukraine",
    description: "snow",
  };
  return (
    <div className="city" mt-5>
      <h1>{overview.city}</h1>
      <div className="country">{overview.country}</div>
      <ul>
        <li>
          Last update: <span>Sunday, 20:37</span>
        </li>
        <li>{overview.description}</li>
      </ul>
    </div>
  );
}
