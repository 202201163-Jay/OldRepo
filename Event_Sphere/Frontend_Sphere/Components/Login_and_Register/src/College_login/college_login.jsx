import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import './loginstyle.scss'

function RightsideCollegeLogin() {

  const [college,setcollege] = useState({
    email : "",
    password : ""
  })

  const handleInput = (e) => {

    e.preventDefault();

    let name = e.target.name;
    let value = e.target.value;

    setcollege({
      ...college,
      [name] : value
    })

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(college);
    
    setcollege({
      collegename : "",
      email : "",
      password : ""
    })
  }

  return (
    <>
       <div className="main-container">

        <div className="upper-login">
        <h2>Welcome Back!</h2>
        <h2>Login to your Account</h2>
        <h3>It's nice to see you again. Ready to conquer?</h3>
        </div>

        <div className="login-box">

                <form onSubmit={handleSubmit}>
                      <input 
                      type='email'
                      placeholder='Your collegename or email' 
                      name='email'
                      id='email'
                      required
                      value={college.email}
                      onChange={handleInput}
                      />

                      <input 
                      type="password"
                      placeholder='Your password' 
                      name='password'
                      id="password" 
                      required
                      value={college.password}
                      onChange={handleInput}
                      />

                      <button type='submit'>Log In</button>
                </form>
            </div>

            <div className="lower-login">
            <h3>Don't have an account? <Link to="/college-register">Sign Up</Link></h3>
            </div>

       </div>
    </>
  )
}

export default RightsideCollegeLogin