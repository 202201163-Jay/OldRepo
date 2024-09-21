import React from 'react'
import RightsideReg from './Rightsideregister'
import './loginstyle.scss'

function Register() {
  return (
    <>
      <div className='main'>
        <div className="left-side">
        <img src="back_login.jpg" alt="" />
        </div>
        <div className="right-side">
          <RightsideReg/>
        </div>
      </div>
    </>
  )
}

export default Register