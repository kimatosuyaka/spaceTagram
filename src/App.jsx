import React, { useState, useEffect } from "react";
import { DatePicker } from "@material-ui/pickers";

import "./app.css";

import { Gallery } from "./components/Gallery";
import { useFetch } from "./hook/useFetch";

const today = new Date();

const initData = () => {
  return (
    JSON.parse(localStorage.getItem("localStoreAllData")) || [
      [today.getFullYear(), today.getMonth(), today.getDate()],
      [today.getFullYear(), today.getMonth(), today.getDate()],
    ]
  );
};

function App() {
  const [allData, setAllData] = useState(initData);

  const [[sY, sM, sD], [eY, eM, eD]] = allData;

  let sDate = new Date(sY, sM, sD);
  let eDate = new Date(eY, eM, eD);

  const [startDate, setStartDate] = useState(sDate);
  const [endDate, setEndDate] = useState(eDate);

  const [sMonth, sDay, sYear] = [
    startDate.getMonth(),
    startDate.getDate(),
    startDate.getFullYear(),
  ];

  const [eMonth, eDay, eYear] = [
    endDate.getMonth(),
    endDate.getDate(),
    endDate.getFullYear(),
  ];

  const api_key = "XUbbpYrMxdiXrSpLUOw9aFlbH0dB9ZFmg3afTdDT";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${`${sYear}-${sMonth}-${sDay}`}&end_date=${`${eYear}-${eMonth}-${eDay}`}`;

  const { data, loading, error } = useFetch(url);

  const localStoreAllData = [
    [sYear, sMonth, sDay],
    [eYear, eMonth, eDay],
  ];

  useEffect(() => {
    localStorage.setItem(
      "localStoreAllData",
      JSON.stringify(localStoreAllData)
    );
  }, [localStoreAllData]);

  return (
    <>
      <header className="App-header">
        <div className="container_header">
          <div className="header_titulo">
            <h1>SpaceTagram</h1>
          </div>
          <div className="header_date">
            <div className="start_date range_date">
              <h3 className="titleDateRange">Start Date</h3>
              <DatePicker
                value={startDate}
                onChange={setStartDate}
                inputVariant={"outlined"}
                maxDate={endDate}
              />
            </div>
            <div className="end_date range_date">
              <h3 className="titleDateRange">Ending Date</h3>
              <DatePicker
                value={endDate}
                onChange={setEndDate}
                inputVariant={"outlined"}
                minDate={startDate}
                maxDate={new Date()}
              />
            </div>
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
