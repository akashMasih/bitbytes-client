import React from 'react'
import moment from 'moment'

function ReceivedChat({ ProfileImg, time, message }) {
    return (
        <div className="receiver">
            <img src={ProfileImg} alt="profile" className="receiver__profile" />
            <div className="receiver__message">
                <div className="receiver__message-content">
                    {message}
                </div>
                <div className="receiver__message-time">
                    {moment(time).format('LT')}
                </div>
            </div>
        </div>
    )
}

export default ReceivedChat