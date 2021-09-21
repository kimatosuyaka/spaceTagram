import React, { useState } from "react";
// import "./App.css";
import "./app.css";

import { Gallery } from "./components/Gallery";
import { useFetch } from "./hook/useFetch";

function App() {
  const api_key = "XUbbpYrMxdiXrSpLUOw9aFlbH0dB9ZFmg3afTdDT";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=10`;

  const [count, setCount] = useState(0);
  const { data, loading, error } = useFetch(url);

  console.log(data);

  return (
    <>
      <header className="App-header">
        <div className="container_header">
          <div className="header_titulo">
            <h1>SpaceTagram</h1>
          </div>
          <div className="header_date">
            <p>FECHAS</p>
          </div>
        </div>
      </header>
      <div className={loading ? "container-loading" : "container-gallery"}>
        <ul
          className={
            loading ? "ul-container-pictures-loading" : "ul-container-pictures"
          }
        >
          {loading ? (
            <img src="/assets/nasa_logo.svg" alt="nasa" className="spin" />
          ) : (
            data.map((d) => <Gallery key={d.date} datos={d} />)
          )}
        </ul>
      </div>
    </>
  );
}
export default App;
