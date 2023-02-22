/** @format */

import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York</h1>
      <ul>
        <li>Monday 13:43</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className='row mt-3'>
        <div className='col-6'>
          <img
            src='https://ssl.gstatic.com/onebox/weather/64/cloudy.png'
            alt='Cloudy'
          />
          <span className='temperature'>6</span>
          <span className='unit'>ºC</span>
        </div>
        <div className='col-6'>
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 83%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}