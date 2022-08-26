import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { RiMore2Fill } from 'react-icons/ri'
import ProfileImg from '../../../../assets/avatar.avif'



function ChatHeader({ name, status }) {
    return (
        <div className="user__header">
            <div className="user__box">
                <img src={ProfileImg} className="user__profile" />
                <div className="user__description">
                    <h3>{name}</h3>
                    <p>{status}</p>
                </div>
            </div>
            <div className="user__function">
                <AiOutlineInfoCircle className='icon' />
                <RiMore2Fill className='icon' />
            </div>
        </div>
    )
}

export default ChatHeader