import React from 'react'
import './Contact.css'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const Contact = () => {

    const [user,setUser] = useState({
                name: "",
                email:"",
                message: "",
            })
              
const handleChange = e => {
const {name , value } = e.target
setUser({...user, [name]: value})
}

const validateName = (name) => {
    const pattern = /^[A-Za-z\s]+$/;
    return pattern.test(name);
};

const validateEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

const submit = () => {
  const {name, email , message} = user;
  if(name && email && message)  alert("submitted Successfully");
  else {
  if(!name) alert("Name is required");
  else if (!validateName(name)) alert('Invalid name');
  else if(name && !email) alert("Email is required");
  else if (!validateEmail(email)) alert('Invalid email address');
  else if(!message) alert("Message is required");
  }
}

  return (
    <>
    <Navbar />
    <div className='contact-page'>
       
           <div className='contact-container'>
           <h1> Contact Us</h1>
                <input 
                type = "text"
                id = "input"
                name='name'
                value={user.name}
                placeholder='Name'
                onChange={handleChange}
                /> 
                <input 
                type = "email"
                id = "input"
                name='email'
                value={user.email}
                placeholder='Email'
                onChange={handleChange}
                />
                <textarea
                name="message"
                id = "input"
                placeholder="Your Message"
                value={user.message}
                onChange={handleChange}
                required
                > </textarea>
                <button onClick={submit}  className='btn'>Login</button>
           </div>
    </div>
    </>
  )
}

export default Contact
