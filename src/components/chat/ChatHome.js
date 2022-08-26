import React, { useEffect, useState } from 'react'
import Header from './componnets/Header'
import './chat.css'
import Sidebar from './componnets/Sidebar'
import MessageSection from './componnets/MessageSection'
import { io } from "socket.io-client";
import { config } from '../../service/config'
import { useNavigate } from 'react-router-dom'

function ChatHome() {
    const [socket, setSocket] = useState(null);
    const [user, setUser] = useState({})
    const [chatWith, setChatWith] = useState({})
    const navigation = useNavigate()
    let savedUser = localStorage.getItem("user")

    useEffect(() => {
        window.addEventListener('storage', () => {
            window.alert('another window or tab is working on the same localStorage')
        }, false)

        document.title = "Chat"
        if (!savedUser) {
            navigation("/login", { replace: true })
        }
        else {
            setUser(JSON.parse(savedUser))
        }

    }, [])

    useEffect(() => {
        const newSocket = io(config.baseUrl, { autoConnect: false });
        newSocket.emit("user connected", JSON.parse(savedUser))
        newSocket.auth = { user: JSON.parse(savedUser) };
        newSocket.connect();
        setSocket(newSocket);
        return () => newSocket.close();
    }, [setSocket]);

    return (
        <div className='chat__container'>
            {
                <>
                    <Header user={user} />
                    <div className="divider">
                        <Sidebar selectUser={setChatWith} socket={socket} user={user} />
                        <MessageSection socket={socket} user={user} sender={chatWith} />
                    </div>
                </>
            }
        </div>
    )
}

export default ChatHome