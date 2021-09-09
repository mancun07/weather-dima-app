import classes from './Loading.module.css'

const Loading = () => {
    return (
    <div class={classes[`lds-roller`]}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>

    )
}

export default Loading


