import React, { useEffect } from 'react'
import Header from './componnets/Header'
import './chat.css'
import Sidebar from './componnets/Sidebar'
import MessageSection from './componnets/MessageSection'

function ChatHome() {
    useEffect(() => {
        document.title = "Chat"
    })
    return (
        <div className='chat__container'>
            <Header />
            <div className="divider">
                <Sidebar />
                <MessageSection />
            </div>
        </div>
    )
}

export default ChatHome