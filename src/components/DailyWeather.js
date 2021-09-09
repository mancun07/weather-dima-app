import React from 'react'
import { useSelector } from 'react-redux';
import classes from './DailyWeather.module.css'
import {motion} from 'framer-motion'

const DailyWeather = () => {

    const dailyWeather = useSelector(state => state.city.dailyWeather)

    const updatedArray = dailyWeather.daily.map(el => {


        return {
            ...el,
            weekDay: 'День недели',
            temp: (el.temp.day - 273.15).toFixed(0),
            id: Math.random()
        }
    })

    return (
        <ul className={classes[`daily-weather`]}>
            {updatedArray.map(el => {
                return <li className={classes[`daily-weather__item`]} key={el.id}>
                    <span>{el.weekDay}</span>
                    <span>
                        <img src={`http://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt=""/>
                    </span>
                    <span>{el.temp}{' '}°C</span>
                </li>
            } )}
        </ul>
    )
}


export default DailyWeather
