/** @format */

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='New York' />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href='https://linkedin.com/in/carolinamacdian'
              class='link'
              target='_blank'
              rel='noreferrer'>
              Carolina Macdian
            </a>
            , is{" "}
            <a
              href='https://github.com/CarolinaMacdian/weather-app-react'
              class='link'
              target='_blank'
              rel='noreferrer'>
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href='https://taupe-cheesecake-ec5e83.netlify.app/'
              class='link'
              target='_blank'
              rel='noreferrer'>
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
