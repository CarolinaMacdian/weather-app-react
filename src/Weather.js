/** @format */

import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      iconDescription: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
    });
  }

  function search() {
    const apiKey = "466o652f33a4a9b0t59607ec49888d3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className='container'>
        <div className='currentWeather'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-9'>
                <input
                  type='search'
                  placeholder='Enter a city...'
                  className='form-control'
                  autoFocus='on'
                  onChange={handleCityChange}
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
          <div className='row mt-2'>
            <WeatherInfo data={weatherData} />
          </div>
          <div className='row mt-5'>
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
