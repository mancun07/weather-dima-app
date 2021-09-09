import React from 'react'
import { useSelector } from 'react-redux';
import classes from './TodayInfo.module.css'

const TodayInfo = () => {

    const weather = useSelector(state => state.city.weather)
    const mainTemp = (weather.main.temp - 273.15).toFixed(0)
    const maxTemp = (weather.main.temp_max - 273.15).toFixed(0)

    return (
        <div className={classes[`today-info`]}>
            <p>Сегодня: cейчас {weather.weather[0].description}.
            Teмпературу воздуха {mainTemp} °C.
            Ожидаемая максимальный температура воздуха сегодня {maxTemp} °C. 
            </p>
        </div>
    )
}

export default TodayInfo
