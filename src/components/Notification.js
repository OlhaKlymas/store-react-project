import { useState, useEffect } from 'react';
import { setNotificationAction } from '../redux/actions/notification.action';
import { useSelector, useDispatch } from 'react-redux';

const Notification = () => {
    const dispatch = useDispatch();

    const [isActiveClass, setIsActiveClass] = useState(false);
    const notification = useSelector(state => state.notificationReducer.notification);

    const closeNotification = () => {
        setIsActiveClass(false)
        setTimeout(() => dispatch(setNotificationAction('')), 1000)
    }

    useEffect(() => {
        setIsActiveClass(notification !== '')
        dispatch(setNotificationAction(notification))
    }, [notification])

    return (
        <div className={isActiveClass ? 'notification notification--active' : 'notification'}>
            <div className='notification__message'>
                <p className=''>{notification}</p>
                <div className='notification__close' onClick={closeNotification}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Notification;