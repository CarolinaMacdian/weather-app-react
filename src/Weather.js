/** @format */

import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      feelsLike: response.data.temperature.feels_like,
      iconDescription: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      date: response.data.time,
    });
  }

  if (weatherData.ready) {
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
          <li>{weatherData.date}</li>
          <li className='text-capitalize'>{weatherData.iconDescription}</li>
        </ul>
        <div className='row mt-3'>
          <div className='col-6'>
            <img
              src={weatherData.iconUrl}
              alt={weatherData.iconDescription}
            />
            <span className='temperature'>
              {Math.round(weatherData.temperature)}
            </span>
            <span className='unit'>ºC</span>
          </div>
          <div className='col-6'>
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)}</li>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "466o652f33a4a9b0t59607ec49888d3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
