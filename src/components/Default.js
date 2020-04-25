import React from 'react'


export default function Default(props) {

    return (
        <div className="container">
            <h1>ERROR 404</h1>
            <h2>page not found at:</h2>
            <h2 className="history"> {props.location.pathname}</h2>
            
        </div>
    )
}
