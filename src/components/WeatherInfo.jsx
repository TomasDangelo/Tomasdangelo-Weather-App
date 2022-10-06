import React from 'react'

const WeatherInfo = ({weatherInfo}) => {

  return (
    
      weatherInfo.name? 
      (<div className='card card-body d-flex align-items-center container-fluid'>
       
        <h1 className='mb-4 text-info'>{weatherInfo.name}, {weatherInfo.sys.country}</h1>
        <div className='row'>
        <div className="col-12 col-md-6">

        <div className='d-flex flex-row gap-2 justify-center align-center'>
          <img src="https://img.icons8.com/color/48/000000/windy-weather--v1.png" alt="weather"/>
          <h2>Descripción del clima: {weatherInfo.weather[0].description}</h2>
        </div>
        <div className='d-flex flex-row gap-2'>
          <img src="https://img.icons8.com/fluency/48/000000/windchill.png" alt="feels_like"/>
          <h2>Sensación Térmica: {Math.round(weatherInfo.main.feels_like)}º</h2>
        </div>
        <div className='d-flex flex-row gap-2'>
          <img style={{width:'48px', height:'48px'}} src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon.png" alt="humidity"/>
          <h2>Humedad: {weatherInfo.main.humidity}%</h2>
        </div>
         <div className='d-flex flex-row gap-2'>
         <img src="https://img.icons8.com/color/48/000000/atmospheric-pressure.png" alt="pressure"/>
         <h2>Presión: {weatherInfo.main.pressure} hPa</h2>
        </div> 
        </div>
        <div className="col-12 col-md-6">

        <div className='d-flex flex-row gap-2'>
          <img src="https://img.icons8.com/color/48/000000/cold.png" alt="temperature"/>
          <h2>Temperatura: {Math.round(weatherInfo.main.temp)}º</h2>
        </div>
        <div className='d-flex flex-row gap-2'>
          <img src="https://img.icons8.com/color/48/000000/hot.png" alt="temp_max"/>
          <h2>Temperatura Máxima: {Math.round(weatherInfo.main.temp_max)}º</h2>
        </div>
        <div className='d-flex flex-row gap-2'>
          <img src="https://img.icons8.com/color/48/000000/cold.png" alt="temp_min"/>
          <h2>Temperatura Mínima: {Math.round(weatherInfo.main.temp_min)}º</h2>
        </div>
        <div className='d-flex flex-row gap-2'>
          <img style={{width:'48px', height:'48px'}} src="https://img.icons8.com/dusk/64/000000/visible--v1.png" alt="visibility"/>
          <h2>Visibilidad: {weatherInfo.visibility}</h2>
        </div>
        </div>

        </div>
           </div>) : 
    
    (<div><h4>Una vez elegida tu ciudad/país, verás aquí el clima</h4> </div>)
    
      
  )
}

export default WeatherInfo