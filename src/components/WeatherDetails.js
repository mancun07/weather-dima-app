import React from 'react'
import { useSelector } from 'react-redux';
import classes from './WeatherDetails.module.css'
import {motion} from 'framer-motion'

const WeatherDetails = () => {

    const hourlyWeather = useSelector(state => state.city.hourlyWeather)

    const updatedArray = hourlyWeather.hourly.map(el => {
    
    const unixTimestamp = el.dt
    const milliseconds = unixTimestamp * 1000 
    const dateObject = new Date(milliseconds)
    // const humanDateFormat = dateObject.toLocaleString()
    const humanDateFormat = dateObject.getHours() + ':' + dateObject.getMinutes() + '0'
    // const hour = humanDateFormat.getHours()

        return {
            ...el,
            dt: humanDateFormat,
            id: Math.random()
        }
    })
 

    return (
        <motion.ul initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}} className={classes[`weather-details`]} >
            {updatedArray.map(el => {
                return <li className={classes[`weather-details__item`]} key={el.id}>
                    <div>{el.dt}{' '}</div>
                    <div>
                        <img src={`http://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt=""/>
                    </div>
                    <div>{el.temp}{' '}°C</div>
                </li>
            })}
        </motion.ul>
    )
}

export default WeatherDetails
