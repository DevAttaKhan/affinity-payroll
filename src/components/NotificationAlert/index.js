import './style.scss';
import {Link} from "react-router-dom";
import CrossIcon from "../../assets/Icons/CrossIcon";


function NotificationAlert({notification, time, link}) {


    return (
        <Link to={link} className={'db_notificationAlert'}>
            <div className="media media">
                <div className="media-body">
                    <h5 className="user-name">{notification}</h5>
                    <p className="msg-title">{time}</p>
                </div>
                <div className="media-aside align-self-start">
                    <button className={'notification_cross'}>
                        <CrossIcon
                            color={'#bfc9d4'}
                        />
                    </button>
                </div>
            </div>
        </Link>

    );
}

export default NotificationAlert;