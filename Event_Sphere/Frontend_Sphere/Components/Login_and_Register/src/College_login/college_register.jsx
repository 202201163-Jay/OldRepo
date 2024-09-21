import React from 'react'
// import './loginstyle.scss'

function RightsideRegcollege() {
  return (
    <>
       <div className="main-container">

        <div className="upper-login">
        <h2>Join us</h2>
        <h2>Boost your Events</h2>
        <h3>Be a part of constantly Growing community.</h3>
        </div>

        <div className="login-box" style={{ width:'35vw',height:'45vh'}}>
           <form onSubmit="">
           <input type="text" placeholder='College Name' id="" required/>
           <input type="text" placeholder='College Email' id="" required/>
            <input type="text" placeholder='Password' id="" required/>
            <button style={{marginLeft:'9vh',fontWeight:'800'}} type='submit'>Sign Up</button>
           </form>
        </div>

        <div className="lower-login">
        <h3>Already have an account? <a href="/college-login">Log In</a></h3>
        </div>

       </div>
    </>
  )
}

export default RightsideRegcollege