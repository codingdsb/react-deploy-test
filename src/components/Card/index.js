import React from 'react'
import './style.css'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.url} alt=""/>
                <h2>{props.text}</h2>
            </div>
        </>
    )
}

export default Card
