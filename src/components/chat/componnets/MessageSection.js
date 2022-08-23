import React from 'react'
import ProfileImg from '../../../assets/avatar.avif'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { RiMore2Fill } from 'react-icons/ri'
import { ImAttachment } from 'react-icons/im'
import { GrEmoji } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import moment from 'moment'

function MessageSection() {
    return (
        <div className="message__section">
            <div className="user__header">
                <div className="user__box">
                    <img src={ProfileImg} className="user__profile" />
                    <div className="user__description">
                        <h3>Hitanshi Gambhir</h3>
                        <p>Online</p>
                    </div>
                </div>
                <div className="user__function">
                    <AiOutlineInfoCircle className='icon' />
                    <RiMore2Fill className='icon' />
                </div>
            </div>
            {/* messages */}
            <div className="messages">
                <div className="receiver">
                    <img src={ProfileImg} alt="profile" className="receiver__profile" />
                    <div className="receiver__message">
                        <div className="receiver__message-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ducimus, cupiditate.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit saepe maxime quod, harum itaque optio est vitae culpa deleniti rem illum aperiam? Dolorem, laborum. At assumenda fugiat porro sapiente corrupti!
                        </div>
                        <div className="receiver__message-time">
                            {moment().format('LT')}
                        </div>
                    </div>
                </div>
                <div className="sender">
                    <div className="sender__message">
                        <div className="sender__message-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ducimus, cupiditate.
                        </div>
                        <div className="sender__message-time">
                            {moment().format('LT')}
                        </div>
                    </div>
                    <img src={ProfileImg} alt="profile" className="sender__profile" />
                </div>
                <div className="sender">
                    <div className="sender__message">
                        <div className="sender__message-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ducimus, cupiditate.
                            adipisicing elit. Maxime neque ducimus, cupiditate.
                        </div>
                        <div className="sender__message-time">
                            {moment().format('LT')}
                        </div>
                    </div>
                    <img src={ProfileImg} alt="profile" className="sender__profile" />
                </div>
                <div className="receiver">
                    <img src={ProfileImg} alt="profile" className="receiver__profile" />
                    <div className="receiver__message">
                        <div className="receiver__message-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ducimus, cupiditate.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit saepe maxime quod, harum itaque optio est vitae culpa deleniti rem illum aperiam? Dolorem, laborum. At assumenda fugiat porro sapiente corrupti!
                        </div>
                        <div className="receiver__message-time">
                            {moment().format('LT')}
                        </div>
                    </div>
                </div>
                <div className="sender">
                    <div className="sender__message">
                        <div className="sender__message-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ducimus, cupiditate.
                        </div>
                        <div className="sender__message-time">
                            {moment().format('LT')}
                        </div>
                    </div>
                    <img src={ProfileImg} alt="profile" className="sender__profile" />
                </div>
                <div className="sender">
                    <div className="sender__message">
                        <div className="sender__message-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ducimus, cupiditate.
                            adipisicing elit. Maxime neque ducimus, cupiditate.
                        </div>
                        <div className="sender__message-time">
                            {moment().format('LT')}
                        </div>
                    </div>
                    <img src={ProfileImg} alt="profile" className="sender__profile" />
                </div>
                <div className="receiver">
                    <img src={ProfileImg} alt="profile" className="receiver__profile" />
                    <div className="receiver__message">
                        <div className="receiver__message-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ducimus, cupiditate.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit saepe maxime quod, harum itaque optio est vitae culpa deleniti rem illum aperiam? Dolorem, laborum. At assumenda fugiat porro sapiente corrupti!
                        </div>
                        <div className="receiver__message-time">
                            {moment().format('LT')}
                        </div>
                    </div>
                </div>
                <div className="sender">
                    <div className="sender__message">
                        <div className="sender__message-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ducimus, cupiditate.
                        </div>
                        <div className="sender__message-time">
                            {moment().format('LT')}
                        </div>
                    </div>
                    <img src={ProfileImg} alt="profile" className="sender__profile" />
                </div>
                <div className="sender">
                    <div className="sender__message">
                        <div className="sender__message-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque ducimus, cupiditate.
                            adipisicing elit. Maxime neque ducimus, cupiditate.
                        </div>
                        <div className="sender__message-time">
                            {moment().format('LT')}
                        </div>
                    </div>
                    <img src={ProfileImg} alt="profile" className="sender__profile" />
                </div>
            </div>
            <div className="send__box">
                <div className="left">
                    <ImAttachment className='attachment__icon' />
                    <input type="text" className='message__send' placeholder='Write your message...' />
                </div>
                <div className="right">
                    <GrEmoji className='attachment__icon' />
                    <input type="submit" value="" className='submit__button' />
                    <div className="send__icon">
                        <FiSend />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageSection