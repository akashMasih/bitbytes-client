import React from 'react'
import { IoNotificationsOutline } from 'react-icons/io5'
import ProfileImg from '../../../assets/avatar.avif'

function Header() {
    return (
        <div className="chat__header">
            <div className="chat__header_title">
                <h3>Chat</h3>
            </div>
            <div className="chat__header-left">
                <div className="notification__container">
                    <IoNotificationsOutline className='notification' />
                </div>
                <div className="profile">
                    <img className='profile__avatar' src={ProfileImg} alt="profile" />
                    <div className="user-name">Akash Masih</div>
                </div>
            </div>
        </div>
    )
}

export default Header