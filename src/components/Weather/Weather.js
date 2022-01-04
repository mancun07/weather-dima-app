import { useSelector } from 'react-redux';
import {motion} from 'framer-motion'
import classes from './Weather.module.css'


const Weather = () => {

   const weather = useSelector(state => state.city.weather)

// const icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

   // To change the first letter of the weather description
    const updatedDescription = weather.weather[0].description
    .split('')
    .map((el, index) => {
        return index === 0 ? el.toUpperCase() : el
    })
    .join('')


    return (
        <motion.div initial={{x:'-100vw'}} animate={{x:0}} className={classes.weather}>
            <div className={classes.weatherDesc}>
                <h2>{weather.name} </h2>
                <h3>{updatedDescription}</h3>
                <h1>{weather.main.temp} °C</h1> 
            </div>
        </motion.div>
    )
}

export default Weather
