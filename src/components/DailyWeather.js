import React from 'react'
import { useSelector } from 'react-redux';
import classes from './DailyWeather.module.css'
import {motion} from 'framer-motion'

const DailyWeather = () => {

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ]

    const dailyWeather = useSelector(state => state.city.dailyWeather)

     // const unixTimestamp = 1631264400

  // const milliseconds = unixTimestamp * 1000 
  
  // const dateObject = new Date(milliseconds)

  // console.log(dateObject)
  
  // const humanDateFormat = dateObject.toLocaleString()
//   const humanDateFormat = dateObject.getDay()
// console.log(humanDateFormat)

    const updatedArray = dailyWeather.daily.map(el => {

const unixTimestamp = el.dt

  const milliseconds = unixTimestamp * 1000 
  
  const dateObject = new Date(milliseconds)

  // console.log(dateObject)
  
  const humanDateFormat2 = dateObject.toLocaleString()
  const humanDateFormat = dateObject.getDay()
  console.log(humanDateFormat)
console.log(humanDateFormat2)


        return {
            ...el,
            dt: daysOfWeek[humanDateFormat], 
            weekDay: 'День недели',
            temp: (el.temp.day - 273.15).toFixed(0),
            id: Math.random()
        }
    })

    return (
        <ul className={classes[`daily-weather`]}>
            {updatedArray.map(el => {
                return <li className={classes[`daily-weather__item`]} key={el.id}>
                    <span>{el.dt}</span>
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
