import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div >
            <ul className="navbar flex">
                <li className="navbar_item mr-3"><Link to="/todo" className="new-quote bg-yellow-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">Todos</Link></li>
                <li className="navbar_item"><Link to="/quote" className="new-quote bg-yellow-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">Queto</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
