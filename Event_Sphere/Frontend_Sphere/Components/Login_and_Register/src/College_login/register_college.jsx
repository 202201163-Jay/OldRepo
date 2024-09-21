import React from 'react'
import RightsideRegcollege from './college_register'
// import './loginstyle.scss'

function CollegeRegister() {
  return (
    <>
      <div className='main'>
        <div className="left-side">
        <img src="back_login.jpg" alt="" />
        </div>
        <div className="right-side">
          <RightsideRegcollege/>
        </div>
      </div>
    </>
  )
}

export default CollegeRegister