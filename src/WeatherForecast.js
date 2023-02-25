/** @format */

import React from "react";
import WeatherForecast from "./WeatherForecast.css";

export default function weatherForecast() {
  return (
    <div className='WeatherForecast'>
      <div className='row'>
        <div className='col'>Sun</div>
        <div className='col'>Mon</div>
        <div className='col'>Tue</div>
        <div className='col'>Wed</div>
        <div className='col'>Thu</div>
        <div className='col'>Fri</div>
        <div className='col'>Sat</div>
      </div>
    </div>
  );
}
