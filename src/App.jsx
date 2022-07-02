import './App.css';
import React, {useState} from 'react';
import axios from 'axios'


function App() {



  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c9c58d087750c073dd8b6de1bae70db2`

  const getWeatherData = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setWeatherData(response.data)
        console.log(response.data)
      })
      setSearch(' ')
    }
  }



  return (
    <div className="App">

      <h1 id="Brand">Daily Weather</h1>

      <div className="Search-Box">
        <input onChange={event => setSearch(event.target.value)} onKeyPress={getWeatherData} value={search} type="text" id='Search' placeholder='City Name...' />

        <img src={require('./Assets/Icons/SearchIcon.png')} alt="" id='Search-Icon' />
      </div>

      <h2 id="Country">{weatherData.sys ? <p>{weatherData.sys.country}</p> : null}, {weatherData.name}</h2>

      <div className="Information-Display-Box">
        <div className="Discription-Box" id="Weather-Info-Square">
          <p id="Weather-Info-Title">Description</p>

          {weatherData.weather ? <p id="Sentence">There seems to be: {weatherData.weather[0].description}</p> : null}

        </div>

        <div className="Temperature-Box" id="Weather-Info-Square">
          <p id="Weather-Info-Title">Temperature</p>
          
          {weatherData.main ? <p>{weatherData.main.temp} °c</p> : null}

          <p id="Tmeperature"></p>

          {weatherData.main ? <p id="Secondary-Data">Max: {weatherData.main.temp_max} °c</p> : null}
          {weatherData.main ? <p id="Secondary-Data">Min: {weatherData.main.temp_min} °c</p> : null}

        </div>

        <div className="Humidity-Box" id="Weather-Info-Square">
         <p id="Weather-Info-Title">Humidity</p>


         {weatherData.main ? <p id="Sentence">Humidity seems to be: {weatherData.main.humidity}</p> : null}
        </div>

        <div className="Wind-Box" id="Weather-Info-Square">
          <p id="Weather-Info-Title">Wind</p>

          {weatherData.wind ? <p id="Sentence">Speed: {weatherData.wind.speed} knt</p> : null}

          {weatherData.wind ? <p id="Secondary-Data">Direction: {weatherData.wind.deg} °</p> : null}

          {weatherData.wind ? <p id="Secondary-Data">Gust: {weatherData.wind.gust} </p> : null}

        </div>

        <div className="Pressure-Box" id="Weather-Info-Square">
          <p id="Weather-Info-Title">Pressure</p>


          {weatherData.main ? <p id="Sentence">Pressure is currently: {weatherData.main.pressure} psi</p> : null}
        </div>

        <div className="Visibility-Box" id="Weather-Info-Square">


        </div>
      </div>

    </div>
  );
}

export default App;
