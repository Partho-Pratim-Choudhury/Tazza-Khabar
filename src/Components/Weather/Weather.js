import React, { useState} from 'react'
import axios from 'axios'
import "./Weather.css"
import WeatherForecastCard from './WeatherForecastCard.js';

function Weather(props) {

document.title = "Weather - NewsAPP-P"

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [forecastData, setForecastData] = useState([]);

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(weatherUrl).then((response) => {
        setData(response.data)
      })
      axios.get(forecastUrl).then((res) => {
        setForecastData(res.data.list);
      })
      setLocation('')
    }
  }
  
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const geolocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
          const forecastUrlWithLL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
          axios.get(geolocationUrl).then((response) => {
            setData(response.data);
            setLocation('');
          });
          axios.get(forecastUrlWithLL).then((res) => {
            setForecastData(res.data.list);            
          })
        },
        (error) => {
          console.error(error);
        }
        );
      } else {
        alert('Geolocation is not supported by your browser.');
      }
    };

    const filterForecastData = (forecastData) => {
      const filteredData = {};
      forecastData.forEach((forecastItem) => {
        const date = new Date(forecastItem.dt_txt.split(' ')[0]);
        const dayKey = date.toDateString();
        if (!filteredData[dayKey]) {
          filteredData[dayKey] = forecastItem;
        }
      });
      return Object.values(filteredData);
    };

  return (
    <div className="weather">
      <div className="search">
        <h4 style={{marginBottom : '1.5rem'}}>Know The Weather</h4>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text" 
        />
        
        <button onClick={getCurrentLocation}> 
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
        Track Current Location
        </button>
      </div>
      
      <div className="containerOfWeather">
        <div className="top">
          <div className="location">
            <p className='weatherAttribute'>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className='tempHeader'>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              <p className='weatherAttribute'>Feels Like</p>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            </div>
            
            <div className="humidity">
              <p className='weatherAttribute'>Humidity</p>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p className='weatherAttribute'>Wind Speed</p>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            </div>
          </div>
        }

        <div className="forecast-container">
          {data.name && (
            <div className="forecast-cards">
              <h2 className='forecastHeading'>7-Day Weather Forecast</h2>
              {<div className="cards">
                {filterForecastData(forecastData).map((forecastDataItem, index) => (
                  <WeatherForecastCard key={index} data={forecastDataItem} />
                ))}
              </div> 
              }
            </div>
          )}
        </div>
      </div>  
    </div>
  );
}

export default Weather;
