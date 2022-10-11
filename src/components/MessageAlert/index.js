import './style.scss';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


function MessageAlert({name, message, link, image}) {
    const [letters, setLetters] = useState('');


    useEffect(()=>{
        const words = name.split(' ');
        const firstLetter = words[0][0];
        const lastLetter = (words.length > 1) ? words[words.length - 1][0] : "";
        setLetters(`${firstLetter}${lastLetter}`)
    }, [name])

    return (
        <Link to={link} className={'db_messageAlert'}>
            <div className="media media">
                <div className="media-aside align-self-start">
                    {
                        image ? <span>image</span> :
                            <div className="avatar avatar-xl">
                                <span className="avatar-title rounded-circle">{letters}</span>
                            </div>
                    }
                </div>
                <div className="media-body">
                    <h5 className="user-name">{name}</h5>
                    <p className="msg-title">{message}</p>
                </div>
            </div>
        </Link>

    );
}

export default MessageAlert;