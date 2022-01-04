import React from 'react'
import { useSelector } from 'react-redux';
import classes from './DailyWeather.module.css'

const DailyWeather = () => {

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ]

    const dailyWeather = useSelector(state => state.city.dailyWeather)

    const updatedArray = dailyWeather.daily.slice(1).map(el => {

    const unixTimestamp = el.dt
    const milliseconds = unixTimestamp * 1000 
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.getDay()

        return {
            ...el,
            dt: daysOfWeek[humanDateFormat], 
            id: Math.random()
        }
    })

    return (
        <ul className={classes[`daily-weather`]}>
            {updatedArray.map(el => {
                return <li className={classes[`daily-weather__item`]} key={el.id}>
                    <span>{el.dt}</span>
                    <span>
                        <img src={`http://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt="weather icon"/>
                    </span>
                    <span>{el.temp.day}{' '}°C</span>
                </li>
            } )}
        </ul>
    )
}


export default DailyWeather
