/** @format */

import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function callApi() {
      const apiKey = "466o652f33a4a9b0t59607ec49888d3f";
      const { longitude, latitude } = props.coordinates;
      const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

      try {
        const response = await axios.get(apiUrl);
        setForecast(response.data.daily);
      } catch (error) {
        setError(error);
      }
    }

    if (props.coordinates) {
      callApi();
    }
  }, [props.coordinates]);

  if (error) {
    return <div className='error'>{error.message}</div>;
  }

  if (!forecast) {
    return null;
  }

  const filteredForecast = forecast.slice(0, 5);

  return (
    <div className='WeatherForecast'>
      <div className='row'>
        {filteredForecast.map((dailyForecast, index) => (
          <div
            className='col'
            key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;
