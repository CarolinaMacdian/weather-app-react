/** @format */

import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className='Weather'>
        <form>
          <div className='row'>
            <div className='col-9'>
              <input
                type='search'
                placeholder='Enter a city...'
                className='form-control'
                autoFocus='on'
              />
            </div>
            <div className='col-3'>
              <input
                type='submit'
                value='Search'
                className='btn btn-primary w-100'
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Monday 13:43</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className='row mt-3'>
          <div className='col-6'>
            <img
              src='https://ssl.gstatic.com/onebox/weather/64/cloudy.png'
              alt='Cloudy'
            />
            <span className='temperature'>
              {Math.round(weatherData.temperature)}
            </span>
            <span className='unit'>ºC</span>
          </div>
          <div className='col-6'>
            <ul>
              <li>Precipitation: 2%</li>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "466o652f33a4a9b0t59607ec49888d3f";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
