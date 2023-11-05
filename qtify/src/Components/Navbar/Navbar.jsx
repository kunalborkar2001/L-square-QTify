import React from 'react'
import "./Navbar.css"
import Searchbar from '../Searchbar/Searchbar'
import Feedback from '../Feedback/Feedback'
import Logo from '../../Images/Logo'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'><Logo/></div>
            <div>
                <Searchbar />
            </div>
            <div className='feedback'><Feedback/></div>
        </div>
    )
}

export default Navbar