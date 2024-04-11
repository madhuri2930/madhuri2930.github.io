import React, { useState } from 'react';
import "./weatherApp.css";
import snow from '../Assets/snow.png';
import wind from '../Assets/wind.png';
import rain from '../Assets/rain.png';
import cloud_icon from '../Assets/cloud.png';
import humidity from '../Assets/humidity.png';
import clear from '../Assets/clear.png';
import drizzle from '../Assets/drizzle.png';
import search from '../Assets/search.png'

export const WeatherApp = () => {
  let api_key = 'ffb58b0ababb955058004546be506220';
  const [Wicon,setWicon] = useState(cloud_icon)
  const Search = async ()=>{
    const element = document.getElementsByClassName('cityInput')
    if(element[0].value === ''){
      return 0
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

    let response = await fetch(url);
    let data = await response.json();

    let humidity = document.getElementsByClassName('humidity-percent')
    let wind = document.getElementsByClassName('windSpeed')
    let temparature = document.getElementsByClassName('weather-temp')
    let location = document.getElementsByClassName('weather-location')

    humidity[0].innerHTML = data.main.humidity+'%';
    wind[0].innerHTML = Math.floor(data.wind.speed)+'km/h';
    temparature[0].innerHTML = Math.floor(data.main.temp)+'°C';
    location[0].innerHTML = data.name

    if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n')
    {
      setWicon(clear)
    }
    else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n')
    {
      setWicon(cloud_icon)
    }
    else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n')
    {
      setWicon(drizzle)
    }
    else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n')
    {
      setWicon(drizzle)
    }
    else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n')
    {
      setWicon(rain)
    }
    else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n')
    {
      setWicon(rain)
    }
    else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n')
    {
      setWicon(snow)
    }
    else{
      setWicon(clear)
    }
  }
  return (
    <div className='main-container'>
      <div className='container'>
      <div className='top-bar'>
        <input type="search" className='cityInput' placeholder='Search' />
        <div className='searchIcon-container' onClick={() => {Search()}}>
        <img src={search} alt="searchIcon" className='search'/>
        </div>
      </div>
      <div className='weather-image'>
        <img src={Wicon} alt="cloudImage" className='CloudImage' />
      </div>
      <div className='weather-temp'>
        24°C
      </div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity} alt="humidityIcon" className='icons'/>
            <div className='data'>
              <div className='humidity-percent'>64%</div>
              <div className='text'>Humidity</div>
            </div>
        </div>
        <div className='element2'>
          <img src={wind} alt="windicon" className='icons'/>
            <div className='data'>
              <div className='windSpeed'>18 km/h</div>
              <div className='text'>Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
