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

    const updatedTemp = (el.temp - 273.15).toFixed(0)

        return {
            ...el,
            dt: humanDateFormat,
            temp: updatedTemp
        }
    })



    return (
        <motion.ul className={classes[`weather-details`]} initial={{x:'100vw'}} animate={{x:0}} transition={{duration: 0.5}}>
            {updatedArray.map((el, i) => {
                return <li className={classes[`weather-details__item`]} key={i}>
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
