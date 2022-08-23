import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Chat from './Chat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__search">
                <BiSearchAlt2 className='icon' />
                <input type="text" placeholder='Search' />
            </div>
            <hr />
            <div className="chat__list">
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    )
}

export default Sidebar