import React from 'react'

const Heading = (props) => {
    return (
        <div className="heading my-5">
            <h4 className="text-center text-color">{props.main}</h4>
            <h1 className="text-center">{props.des}</h1>
        </div>
    )
}

export default Heading