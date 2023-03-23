const Error = (props) => {
    const defaultMessage = 'Sorry, something went wrong... Please, try later';

    return (
        <div className="error-message">
            {props.message || defaultMessage}
        </div>
    )
}

export default Error;