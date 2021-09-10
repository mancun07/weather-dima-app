import {useRef} from 'react'
import classes from './UserSearch.module.css'
import {uiActions} from '../store/uiSlice'
import {useDispatch} from 'react-redux'
import {actionsfetchDataHandler} from '../store/actions'

const UserSearch = (props) => {
    const dispatch = useDispatch()
    const inputRef = useRef()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let inputRefValue = inputRef.current.value.trim();

        if (inputRefValue === '' || !isNaN(inputRefValue)) {
            window.scrollTo(0, 0);
            dispatch(uiActions.showNotification({
                message: 'Город то введи!'
            }))
        } else {
            dispatch(actionsfetchDataHandler(inputRefValue))
            inputRef.current.value = ''
        }
    }

    return (
        <form className={classes[`search-form`]} onSubmit={onSubmitHandler}>
            <div className={classes[`form-group`]}>
                <label htmlFor="city">Введите город</label><br />
                <input ref={inputRef} type="text" id="city"/>
            </div>
            <button>Получить данные о погоде</button>
        </form>
    )
}

export default UserSearch
