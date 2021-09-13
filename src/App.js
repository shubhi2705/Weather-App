import Weather from './components/weather.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'//install bootstrap using npm
// import 'weather-icons/css/weather-icons.css' //install waether icon gitrepo
import React from 'react';
import Form from './components/Form'

const key="c399148e4353cf2b9183bb5120a24cc7";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Location:"",
      icon:"",
      main:"",
      celsius:"",
      temp_max:"",
      temp_min:"",
      desc:"",
      error:false
    };
  this.weatherIcon={
    Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
  }
 
  }
  calCelsius(temp)
  {
    let cell=temp-273.15;
    return cell.toFixed(0);
  }
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }
getWeather=async (e)=>{
  e.preventDefault();
  const city=e.target.elements.city.value;
  const country=e.target.elements.country.value;
  if(city && country)
 {
   const data= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`);
  const response= await data.json();
   console.log(response);
  this.setState({
    Location:`${response.name},${response.sys.country}`,
    main:response.main.temp,
    celsius:this.calCelsius(response.main.temp),
    temp_max:this.calCelsius((response.main.temp_max).toFixed(0)),
    temp_min:this.calCelsius((response.main.temp_min).toFixed(0)),
    desc:response.weather[0].description,
    error:false
  });
  this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
  this.setState({
    city:"",
    country:""
  })
 }
 else{
   this.setState({error:true})
 }
}

  render(){
    return(
      <>  
      <Form loadWeather={this.getWeather} error={this.state.error}/>
      <Weather data={this.state}/>
      </>
     
    )
  }
}


export default App;
