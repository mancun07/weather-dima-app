import {useRef, useState} from 'react'
import classes from './UserSearch.module.css'
import {uiActions} from '../store/uiSlice'
import {useDispatch} from 'react-redux'
import {actionsfetchDataHandler} from '../store/actions'

const UserSearch = (props) => {
    const [cityIsValid, setCityIsValid] = useState(true)
    const dispatch = useDispatch()
    const inputRef = useRef()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let inputRefValue = inputRef.current.value.trim();

        if (inputRefValue === '' || !isNaN(inputRefValue)) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setCityIsValid(false)
            dispatch(uiActions.showNotification({
                message: 'Блин...Город то введи!'
            }))
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            dispatch(actionsfetchDataHandler(inputRefValue))
            inputRef.current.value = ''
        }
            
    }

    return (
        <form className={classes[`search-form`]} onSubmit={onSubmitHandler}>
            <div className={classes[`form-group`]}>
                <label htmlFor="city">Введите город</label><br />
                <input className={`${!cityIsValid ? classes.notValid : '' }`} ref={inputRef} type="text" id="city"/>
            </div>
            <button>Получить данные о погоде</button>
        </form>
    )
}

export default UserSearch