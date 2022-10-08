import './App.css';
import WeatherForm from './components/WeatherForm'
import WeatherInfo from './components/WeatherInfo'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Description from './components/Description';
import Footer from './components/Footer';
  
function App() {
const [weatherInfo, setWeatherInfo] = useState([])
const [cityValue, setCityValue] = useState("")

const getWeather = (event) =>{
    event.preventDefault()
    console.log(event)
    const {city} = event.target.elements;
    const cityValue = setCityValue(city.value);
    console.log(cityValue)
    }

useEffect(() => {
  if(cityValue) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=949f20f2594ddf19e912835f890b63da&units=metric`
    fetch(API_URL)
    .then ((res) => res.json())
    .then (data => {setWeatherInfo(data)
    console.log(data)})
  }
}, [cityValue])

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
    <Footer/>
    </>
  );
}

export default App;
