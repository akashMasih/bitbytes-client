import React, { useEffect, useState } from 'react'
import ProfileImg from '../../../assets/avatar.avif'
import Loading from '../../../assets/writing.gif'

import { ImAttachment } from 'react-icons/im'
import { GrEmoji } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import ChatHeader from './chatwindow/ChatHeader'
import ReceivedChat from './chatwindow/ReceivedChat'
import SendChat from './chatwindow/SendChat'
import WelcomeImg from '../../../assets/welcome.svg'

function MessageSection({ socket, user, sender }) {
    const [message, setMessage] = useState("")
    const messageSubmit = e => {
        e.preventDefault()
        socket.emit("private message", socket.id, message)

    }

    return (
        <div className="message__section">
            {sender && sender.user && sender.user.id ? <ChatHeader name={sender && sender.user && sender.user.name} status="Online" /> : ""}
            {/* messages */}
            <div className="messages">
                {
                    sender && sender.user && sender.user.id ?
                        <>
                            <ReceivedChat />
                            <SendChat />
                        </>
                        :
                        <img src={WelcomeImg} alt="welcome" />
                }


            </div>
            <form onSubmit={messageSubmit}>
                <div className="send__box">
                    <div className="left">
                        <ImAttachment className='attachment__icon' />
                        <input type="text" className='message__send' name="message" onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Write your message...' />
                    </div>
                    <div className="right">
                        <GrEmoji className='attachment__icon' />
                        <input type="submit" value="" className='submit__button' />
                        <div className="send__icon">
                            <FiSend />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MessageSection