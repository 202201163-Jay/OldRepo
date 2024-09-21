import React from 'react'
import Rightside from './rightside'
import './loginstyle.scss'


function Login() {
  return (
    <>
      <div className='main'>
        <div className="left-side">
        <img src="back_login.jpg" alt="" />
        </div>
        <div className="right-side">
          <Rightside/>
        </div>
      </div>
    </>
  )
}

export default Login