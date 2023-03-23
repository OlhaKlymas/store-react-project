const Tooltip = (props) => {
    return (
        <div className='tooltip'>
            <div className='tooltip__message'>{props.message}</div>
        </div>
    )
}

export default Tooltip;