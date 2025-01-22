import React, { useState } from "react";
const Contact =()=>{
    const[form,setform]=useState({name:'',email:'',message:'',issubmitted:false})
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setform({...form,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setform({...form,issubmitted:true})
    }
    const isformValid=form.name && form.email && form.message.split('').length>=4

    return(
         <div className="contact">
          <h2>Contact</h2>
            {form.isformValid?(
               <p>sent successfully</p>
            ):
            (
              <form onSubmit={handleSubmit}>
                <label>
                    name:
                    <input type="text" name="name" value={form.name} onChange={handleChange} required/>
                </label>
                <label>
                    email:
                    <input  type="email" name="email" value={form.email} onChange={handleChange} required/>
                </label>
                <label>
                    message:
                    <textarea  name="message" value={form.message} onChange={handleChange} required/>
                </label>
                <button type="submit" disabled={!isformValid}>
                    send
                </button>
              </form>
            )
            }
         </div>
    )
}
export default Contact;