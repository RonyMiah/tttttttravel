import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({user}) => {
    const {name,day ,img,price,_id} = user;
    return (
        <div className="card-design">
            <img src={img} alt="" />
            <h1>{name}</h1>
           <h3>{day}</h3>
           <h1> $ {price} </h1>
            
           <Link to={`/viewCard/${_id}`}> <button className="btn btn-warning">Book This Service</button></Link>
        </div>
    );
};

export default Card;