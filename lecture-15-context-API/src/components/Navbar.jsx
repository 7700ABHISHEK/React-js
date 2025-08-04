import React, { useContext } from 'react'
import { AppContext } from '../App'

const Navbar = () => {

    const {user, handleLogOut} = useContext(AppContext);


    return (
        <div className='container d-flex justify-content-between py-5 align-items-center'>
            <div>logo</div>
            <div className='list'>
                <ul className='list-unstyled d-flex gap-5 m-0'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                    <li>{user?.name?.toUpperCase()}</li>
                </ul>
            </div>
            <button className='btn btn-danger' onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default Navbar