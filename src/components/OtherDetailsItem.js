import React from 'react'
import classes from './OtherDetailsItem.module.css'

const OtherDetailsItem = (props) => {
    return (
        <div>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.data}>{props.data}</div>
            <hr />
        </div>
    )
}

export default OtherDetailsItem
