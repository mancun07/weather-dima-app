import { useSelector } from 'react-redux';
import {motion} from 'framer-motion'
import classes from './Weather.module.css'


const Weather = () => {

   const weather = useSelector(state => state.city.weather)
//    const hourlyWeather = useSelector(state => state.city.hourlyWeather)
   console.log(weather)

   const unixTimestamp = weather.dt
   const milliseconds = unixTimestamp * 1000 
   const dateObject = new Date(milliseconds)
//    const humanDateFormat = dateObject.toLocaleString()
   const humanDateFormat = dateObject.getDate() + '/' + dateObject.getMonth() + '/' + dateObject.getFullYear() 
//    const humanDateFormat = dateObject.getHours() + ':' + dateObject.getMinutes() + '0'
   // const hour = humanDateFormat.getHours()



    const icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    const celsTemp = (weather.main.temp - 273.15).toFixed(0)

    return (
        <motion.div initial={{x:'-100vw'}} animate={{x:0}} className={classes.weather}>
            {/* <div className={classes.weatherImage}>
                <img src={icon} alt="day/night" />
            </div> */}
            {/* <div className={classes.icon}>
                <img src={icon} alt="weather icon" />
            </div> */}
            <div className={classes.weatherDesc}>
                <h2>{weather.name} </h2>
                {/* <span>{humanDateFormat}</span> */}
                {/* <span>{city[0].Country.LocalizedName}</span> */}
                <h3>{weather.weather[0].description}</h3>
                 <h1>{celsTemp} °C</h1> 
            </div>
        </motion.div>
    )
}

export default Weather
