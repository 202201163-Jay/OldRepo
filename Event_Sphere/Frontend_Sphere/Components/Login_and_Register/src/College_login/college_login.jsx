import React from 'react'
// import './loginstyle.scss'

function RightsideCollegeLogin({role,name}) {
  return (
    <>
       <div className="main-container">

        <div className="upper-login">
        <h2>Welcome Back!</h2>
        <h2>Login to your Account</h2>
        <h3>It's nice to see you again. Ready to conquer?</h3>
        </div>

        <div className="login-box">
           <form onSubmit="">
           <input type="text" placeholder='Your Work email' id="" required/>
            <input type="text" placeholder='Your Password' id=""  required/>
            <button type='submit'>Log In</button>
           </form>
        </div>

        <div className="lower-login">
        <h3>Don't have an account? <a href="/college-register">Sign Up</a></h3>
        </div>

       </div>
    </>
  )
}

export default RightsideCollegeLogin