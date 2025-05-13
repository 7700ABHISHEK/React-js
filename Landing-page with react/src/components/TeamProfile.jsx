import React from 'react'

const TeamProfile = (props) => {
    return (
        <div className='col-lg-4'>
            <div className='ourteam'>
                <img src={props.img} className='w-100 img-fluid' alt="man" />
            </div>
            <div className='title text-center'>
                <h3>{props.title}</h3>
                <p>{props.post}</p>
            </div>
        </div>
    )
}

export default TeamProfile