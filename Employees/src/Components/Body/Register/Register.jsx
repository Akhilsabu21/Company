import React, { useState } from 'react'
import './Register.css'

let pic="";
const Register = () => {
  const [val,setVal]=useState({
    f_name:"",
    l_name:"",
    email:"",
    dob:"",
    gen:"",
    empid:"",
    pho:"",
    city:"",
    dist:"",
    exp:"",
    pic:""
  })

  const setData=(e)=>{
    setVal((pre)=>{
      return {...pre,[e.target.name]:e.target.value};
    })
  }
  const picture=async (e)=>{
    pic=await convertToBase64(e.target.files[0]);
    setVal((pre)=>{
      return {...pre,[e.target.name]:pic}
    })
    
  }

  const submit=(e)=>{
    e.preventDefault()
    console.log(val);
  }


  function convertToBase64(file) {
    // console.log("b64",file);
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
}

  return (
    <div className='r-container'>
      <div>
  
  <div className="register-content">
    <div className="register-profile-image">
        <img src={val.pic} alt="" />
    </div>
    <form action="" onSubmit={submit}>
    <div className="form-register">
      <div className="container-left">
        <p className="form-label">First name*</p>
        <input onChange={setData} type='text' name="f_name" className="form-input"/>
        <p className="form-label">Email*</p>
        <input onChange={setData} type='text' name="email" className="form-input"/>
        <p className="form-label">Employee ID</p>
        <input onChange={setData} type='text' name="empid" className="form-input"/>
        <p className="form-label">City</p>
        <input onChange={setData} type='text' name="city" className="form-input"/>
        <p className="form-label">Experience</p>
        <input onChange={setData} type='number' name="exp" className="form-input"/>
      </div>
      <div className="container-right">
        <p className="form-label">Last name*</p>
        <input onChange={setData} type='text' name="l_name" className="form-input"/>
        <div className="birthday-gender">
          <div>
            <p className="form-label">Birthday</p>
            <input onChange={setData} type='Date' name="dob" className="form-input-small"/>
          </div>
          <div>
            <p className="form-label">Gender</p>
            <input onChange={setData} type='text' name="gen" className="form-input-small"/>
          </div>
        </div>
        
        <p className="form-label">Phone</p>
        <input onChange={setData} type='number' name="pho" className="form-input"/>
        <p className="form-label">District</p>
        <input onChange={setData} type='text' name="dist" className="form-input"/>
        
        <p className="form-label">Profile</p>
        <input onChange={picture} type='file' name="pic" className="form-input profile"/>
        
      <div className="s-btn">
      <button className=" button-submit">Submit</button>
      </div>
      </div>
      
    </div>
    </form>
</div>
</div>


    </div>
  )
}

export default Register
