import { useState, useEffect } from 'react';

const Notification = (props) => {
    const [message, setMessage] = useState('');
    const [isActiveClass, setIsActiveClass] = useState(false);


    const closeNotification = () => {
        setIsActiveClass(false)
        setTimeout(() => setMessage(''), 1000)
    }

    useEffect(() => {
        setIsActiveClass(props.message !== '')
        setMessage(props.message)
    }, [props.message])

    return (
        <div className={isActiveClass ? 'notification notification--active' : 'notification'}>
            <div className='notification__message'>
                <p className=''>{message}</p>
                <div className='notification__close' onClick={closeNotification}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Notification;