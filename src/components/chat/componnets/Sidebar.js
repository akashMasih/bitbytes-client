import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Chat from './Chat'

function Sidebar({ socket, user, selectUser }) {
    const [userList, setUserlist] = useState([])
    useEffect(() => {
        socket.on("users", (list) => {
            setUserlist(list)
        })

        socket.on("user connected", (user) => {
            setUserlist([...userList, user])
        });
    }, [socket])
    return (
        <div className="sidebar">
            <div className="sidebar__search">
                <BiSearchAlt2 className='icon' />
                <input type="text" placeholder='Search' />
            </div>
            <hr />
            <div className="chat__list">
                {
                    userList.filter(item => item.userID !== user.id).map((list, index) => (
                        <div key={index} onClick={() => selectUser(list)}>
                            <Chat name={list.user.name} />
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar