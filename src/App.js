import './App.css';
import WeatherForm from './components/WeatherForm'
import WeatherInfo from './components/WeatherInfo'
import {useState} from 'react'
import Navbar from './components/Navbar';
import Description from './components/Description';
import Cities from './components/Cities';



function App() {
const [weatherInfo, setWeatherInfo] = useState([])

    const getWeather = async (event) =>{
    event.preventDefault()
    console.log(event)
    const {city} = event.target.elements;
    const cityValue = city.value;


    if(cityValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=949f20f2594ddf19e912835f890b63da&units=metric`
      await fetch(API_URL)
      .then ((res) => res.json())
      .then (data => {setWeatherInfo(data)
      console.log(data)})
    } else{
      alert("Por favor ingrese una ciudad y un país")
    }

    }

  return (
    <>
    <Navbar/>
    <Description/>
    <div className='container-fluid p-4'>
      <div className="row">
          <div className="col-12 mx-auto">
           <WeatherForm getWeather={getWeather}/>
           <WeatherInfo weatherInfo={weatherInfo}/>
          </div>
      </div>
    </div>
    <Cities/>
    </>
  );
}

export default App;
