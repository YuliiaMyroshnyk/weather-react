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
            <a
              href="https://github.com/YuliiaMyroshnyk/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Yuliia Myroshnyk
          </div>
        </footer>
      </div>
    </div>
  );
}
