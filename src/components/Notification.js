import {motion} from 'framer-motion'
import classes from './Notification.module.css'

const Notification = (props) => {
    return (
        <motion.div initial={{y: '-100vh'}} animate={{y:0}} className={classes.notification}>
            <div className="message">{props.message}</div>
        </motion.div>
    )
}

export default Notification
