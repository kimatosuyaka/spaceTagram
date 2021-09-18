import React, { useState } from "react";
// import "./App.css";
import "./app.css";

import { Shows } from "./components/Shows";
import { useFetch } from "./hook/useFetch";

function App() {
  const api_key = "XUbbpYrMxdiXrSpLUOw9aFlbH0dB9ZFmg3afTdDT";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=15`;

  const [count, setCount] = useState(0);
  const { data, loading, error } = useFetch(url);

  console.log(data);

  return (
    <>
      <header className="App-header">
        <h1>SpaceTagram</h1>
      </header>
      <div className="container">
        <div>
          <ul className="container-pictures">
            {loading ? (
              <p>Cargando...</p>
            ) : (
              data.map((d) => <Shows key={d.date} datos={d} />)
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
export default App;
