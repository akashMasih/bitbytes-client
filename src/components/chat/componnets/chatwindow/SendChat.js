import React from 'react'
import moment from 'moment'

function SendChat({ ProfileImg, time, message }) {
    return (
        <div className="sender">
            <div className="sender__message">
                <div className="sender__message-content">
                    {message}
                </div>
                <div className="sender__message-time">
                    {moment(time).format('LT')}
                </div>
            </div>
            <img src={ProfileImg} alt="profile" className="sender__profile" />
        </div>
    )
}

export default SendChat