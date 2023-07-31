import React from 'react';

const WeatherForecastCard = ({ data }) => {
  const { dt_txt, main, weather } = data;
  const date = new Date(dt_txt).toLocaleDateString('en-US', { weekday: 'short'});
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className="forecast-card">
      <p>{date}</p>
      <img src={iconUrl} alt={weather[0].description} />
      <p>{main.temp.toFixed()}°C</p>
    </div>
  );
};

export default WeatherForecastCard;
