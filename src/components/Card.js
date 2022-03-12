import React from 'react';

export default function Card(props) {
    return (
        <>
            <div className="Card">
                <img src={props.img} />
                <div className="location">
                    <h1>{props.name} </h1>
                </div>
                <div className="visitDate">
                    <p>{props.date} </p>
                </div>
                <div className="locationInfo">
                    <p>{props.info}  </p>
                </div>
            </div>

        </>
    )
}