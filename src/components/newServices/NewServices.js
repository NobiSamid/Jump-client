import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hook/useAuth';
import "./NewServices.css";

const NewServices = () => {
    
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const adminEmail = "nobisamid@gmail.com";

    const onSubmit = data => {
      console.log(data);
      console.log("admin email: ",adminEmail);
      console.log("user email: ",user.email);

      if(adminEmail == user.email){
          console.log('tumi admin tai add korte dilam nato ditam na');

           // axios.post('http://localhost:5000/services', data)
            axios.post('https://blooming-basin-61884.herokuapp.com/services', data)
            .then(res =>{
                console.log(res)
                if(res.data.insertedId){
                    alert('data added successfully')
                    reset();
                }
            })
        }
        else{
            alert('ONly admin can add new service, hehe boy')
        }


     
    }
    return (
        <div className="new-srvc-main">
            <h3 className="hdng">Let us know about your desired Adventure</h3>
            <div className="frm-qts">
                <div>
                    <h3 className="qts">Code is like humor. When you have to explain it, it's BAD.</h3>
                </div>
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
            
        </div>
    );
};

export default NewServices;