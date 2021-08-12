import React from 'react'
import Sidebar from '../componentLayout/Sidebar'

const Website = ({ children }) => {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}

export default Website
