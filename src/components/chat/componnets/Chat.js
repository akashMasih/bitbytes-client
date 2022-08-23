import React from 'react'
import ProfileImg from '../../../assets/avatar.avif'

function Chat() {
    return (
        <div className="chat__box active__chat">
            <img src={ProfileImg} className="chat__profile" />
            <div className="chat__description">
                <h3>Hitanshi Gambhir</h3>
                <p>I will call you later</p>
            </div>
            <div className="chat__detail">
                <div className="last__message">
                    1 min
                </div>
                <div className="message__count">
                    12
                </div>
            </div>
        </div>
    )
}

export default Chat