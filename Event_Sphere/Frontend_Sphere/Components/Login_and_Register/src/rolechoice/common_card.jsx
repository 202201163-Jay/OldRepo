import React from 'react'
import { Link } from 'react-router-dom';
import './rolechoice.scss'

function Card({role}) {

  // Determine the href based on the role
  const loginHref = role === "college" ? "/college-login" : "/login";
  const registerHref = role === "college" ? "/college-register" : "/register";

  return (
    <>
        <div className="role-choice">

            <h1>For {role}</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cumque doloremque reprehenderit numquam voluptates, consequatur 
                suscipit quaerat recusandae nisi amet maxime maiores omnis 
                consectetur minus deleniti architecto distinctio blanditiis at 
                possimus sunt voluptatem eius perspiciatis quos inventore quae. 
                Officia, accusamus odit!</h4>

                <Link to={loginHref}><button>Log In</button></Link>

                <h3>Don't have an account? <Link to={registerHref}>Sign Up</Link></h3>
        </div>
    </>
  )
}

export default Card