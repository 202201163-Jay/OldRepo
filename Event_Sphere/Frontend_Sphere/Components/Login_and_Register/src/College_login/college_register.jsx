import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import './loginstyle.scss'

function RightsideRegcollege() {

  let [college,setcollege] = useState({
    name : "",
    email : "",
    password : "",
  })

  const handleInput = (e) => {

    e.preventDefault();

    let name = e.target.name;
    let value = e.target.value;

    setcollege({
      ...college,
      [name] : value,
    })

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(college);
    
    setcollege({
      name : "",
      email : "",
      password : "",
    })
  }


  return (
    <>
       <div className="main-container">

        <div className="upper-login">
        <h2>Join us</h2>
        <h2>Boost your Events</h2>
        <h3>Be a part of constantly Growing community.</h3>
        </div>

        <div className="login-box" style={{ width:'35vw',height:'45vh'}}>
          <form onSubmit={handleSubmit}>

            <input 
            type="text"
            placeholder='college name' 
            name='name'
            id="name" 
            required
            value={college.name}
            onChange={handleInput}
            />

            <input 
            type='email'
            placeholder='Your collegename or email' 
            name='email'
            id='email'
            required
            value={college.email}
            onChange={handleInput}
            />

            <input type="password"
            placeholder='Your password' 
            name='password'
            id="password" 
            required
            value={college.password}
            onChange={handleInput}
            />

            <button style={{marginLeft:'9vh',fontWeight:'800'}} type='submit'>Sign Up</button>

          </form>
        </div>

        <div className="lower-login">
        <h3>Already have an account? <Link to="/college-login">Log In</Link></h3>
        </div>

       </div>
    </>
  )
}

export default RightsideRegcollege