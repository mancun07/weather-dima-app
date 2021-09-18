import { useSelector } from 'react-redux';
import {motion} from 'framer-motion'
import classes from './Weather.module.css'


const Weather = () => {

   const weather = useSelector(state => state.city.weather)

   const unixTimestamp = weather.dt
   const milliseconds = unixTimestamp * 1000 
   const dateObject = new Date(milliseconds)
//    const humanDateFormat = dateObject.toLocaleString()
   const humanDateFormat = dateObject.getDate() + '/' + dateObject.getMonth() + '/' + dateObject.getFullYear() 

   const description = weather.weather[0].description.split('');
    const updatedDescription = description.map((el, index) => {
        return index === 0 ? el.toUpperCase() : el
    }).join('')
    console.log(updatedDescription)


    // const icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

    return (
        <motion.div initial={{x:'-100vw'}} animate={{x:0}} className={classes.weather}>
            <div className={classes.weatherDesc}>
                <h2>{weather.name} </h2>
                {/* <span>{humanDateFormat}</span> */}
                {/* <span>{city[0].Country.LocalizedName}</span> */}
                <h3>{updatedDescription}</h3>
                 <h1>{weather.main.temp} °C</h1> 
            </div>
        </motion.div>
    )
}

export default Weather
