import React from 'react'

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

                <a href={loginHref}><button>Log In</button></a>

                <h3>Don't have an account? <a href={registerHref}>Sign Up</a></h3>
        </div>
    </>
  )
}

export default Card