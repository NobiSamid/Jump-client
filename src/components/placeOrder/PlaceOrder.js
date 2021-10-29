import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';

const PlaceOrder = () => {

    const { user } = useAuth();

    const { skey } = useParams();
    const [servForm, setServForm] = useState([]);

    useEffect(()=>{
        // fetch('http://localhost:5000/services')
        fetch('https://blooming-basin-61884.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=> setServForm(data))
    },[])
    
    const exactService = servForm.filter(sId=> sId._id == skey);
    console.log(exactService[0]?.title);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
      console.log(data);
    //   axios.post('http://localhost:5000/users', data)
      axios.post('https://blooming-basin-61884.herokuapp.com/users', data)
      .then(res => {
          console.log(res);
          if(res.data.insertedId){
              alert('user added successfully')
              reset()
            }
      })
    }
    
    return (
        <div>
            <h3>Get ready for <span>{exactService[0]?.title}</span> and Enrole</h3>
            <form className="new-service" onSubmit={handleSubmit(onSubmit)}>
                <input value={exactService[0]?.title || ''} readOnly {...register("service", { required: true})} /><br/>
                <input value={user?.displayName} {...register("name", { required: true})} /><br/>
                <input type="number" placeholder="Age" {...register("age")} /><br/>
                <input placeholder="Phone number" {...register("phone")} /><br/>
                <input value={user?.email} type="email" {...register("email")} /><br/>
                <textarea placeholder="Passport number" type="number" {...register("passport")} /><br/>
                <input placeholder="Date" type="date" {...register("date")} /><br/>
                <input placeholder="" type="submit" /><br/>
            </form>
        </div>
    );
};

export default PlaceOrder;