import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";

import './ViewCard.css'
import { Form } from 'react-bootstrap';

const ViewCard = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    const history= useHistory();
    const { cardId }= useParams();
    const [ users , setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setUsers(data))
    } ,[])

    const filteredData = users.filter((use) =>{
        return use._id.toString() === cardId.toString();
    })

    console.log(filteredData[0])

    // const handelGoBack=()=>{
    //     history.push('/home')


    // }
    
    return (
        
        <>

            <h2 className="fs-1 fw-bolder text-primary"> Book This Service </h2>
            

                <div className="viewCard">

                <div className="onlyCard">
                <h1>Name: {filteredData[0]?.name} </h1>
                <h1>Total Cost $:{filteredData[0]?.price} </h1>
                <img src={filteredData[0]?.img} alt="" className="w-75"/>
                <p className="w-100 mx-auto">{filteredData[0]?.description}</p>
                {/* <button onClick={handelGoBack} className="btn btn-warning">Go Back</button> */}
                </div>
                

                <div className="card-form">

             


                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Fill  the From Below </h2>
                <Form>
                    <Form.Group className="mb-3" >
                    <Form.Control type="email" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                    <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                
               </Form>
                <input {...register("state")} required placeholder="Enter Your State"/>
                <br />
                <input {...register("region")} required  placeholder="Enter Your Region"/>
                <br />
                <input {...register("address")} required placeholder="Enter Your Address"/>
                <br />
                <input type="submit" />
                </form>

                </div>


                </div>

        </>
      
    );
};

export default ViewCard;