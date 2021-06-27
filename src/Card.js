import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <div className="cards dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200×200`} alt="robot" />
            <div>
                <h2>{props.name}</h2>
                <h3>{props.email}</h3>
            </div>
        </div>
    )
}

export default Card;