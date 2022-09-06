import notification from '../../assets/img/notification-icon.svg'
import './NotificationButton.css';

const NotificationButton = () => {
    return (
        <div className="dsmeta-red-button">
            <img src={notification} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
