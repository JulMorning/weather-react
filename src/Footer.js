import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer mt-2">
      <small>
        This project was coded by Yuliia Klan and is
        <a
          href="https://github.com/JulMorning/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://admirable-boba-79f3a5.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </small>
    </div>
  );
}
