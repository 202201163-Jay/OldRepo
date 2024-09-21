import React from 'react'
// import './loginstyle.scss'
import RightsideCollegeLogin from './college_login'

function CollegeLogin() {
  return (
    <>
      <div className='main'>
        <div className="left-side">
        <img src="back_login.jpg" alt="" />
        </div>
        <div className="right-side">
          <RightsideCollegeLogin/>
        </div>
      </div>
    </>
  )
}

export default CollegeLogin