import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data =>{ 
        console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res => {
           if(res.insertedId){
               alert('added Successfully ')
               
               reset();

           }
        })
    
    }
    
    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="City  Name " />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Enter your Img url" />
                <textarea {...register("description")} placeholder=" description" />
                <input {...register("day")} placeholder=" Day" />
               
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;


































