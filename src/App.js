import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <div>
            <p>
              This project was coded by Yuliia Myroshnyk and it is{" "}
              <a
                href="hhttps://github.com/YuliiaMyroshnyk/weather-react"
                target="_blank"
                title="GitHub project profile"
                rel="noreferrer"
              >
                open-source code
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
