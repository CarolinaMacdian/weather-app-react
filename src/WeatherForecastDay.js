/** @format */

import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.daydata.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.daydata.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.daydata.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className='WeatherForecast-day'>{day()}</div>
      <div>
        <img
          src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.daydata.condition.icon}.png`}
          alt={props.daydata.iconDescription}
        />
      </div>
      <div className='WeatherForecast-temperatures'>
        <span className='WeatherForecast-temperature-max'>
          {maxTemperature()}
        </span>
        <span className='WeatherForecast-temperature-min'>
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
