import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./NewServices.css";

const NewServices = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      console.log(data);

    //   axios.post('http://localhost:5000/services', data)
      axios.post('https://blooming-basin-61884.herokuapp.com/services', data)
      .then(res =>{
          console.log(res)
          if(res.data.insertedId){
              alert('data added successfully')
              reset();
          }
      })
    }
    return (
        <div>
            <h3>Let us know about your desired Adventure</h3>
            <form className="new-service" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Title" {...register("title", { required: true})} /><br/>
                <input placeholder="Location" {...register("location")} /><br/>
                <input placeholder="Cost" type="number" {...register("cost")} /><br/>
                <input placeholder="Requirements" {...register("requirements")} /><br/>
                <textarea placeholder="Description" {...register("description")} /><br/>
                <input placeholder="Image-url" {...register("imageurl")} /><br/>
                <input placeholder="" type="submit" />
            </form>
        </div>
    );
};

export default NewServices;