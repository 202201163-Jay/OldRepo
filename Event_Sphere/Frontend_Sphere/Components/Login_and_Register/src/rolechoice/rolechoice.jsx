import React from 'react'
import './rolechoice.scss'
import Card from './common_card'


function Rolechoice() {
  return (
    <>
        <div className="main-body-choice">

            <div className="colleges-part">
                <Card role="college"/>
            </div>

            <div className="students-part">
                <Card role="student"/>
            </div>

        </div>
    </>
  )
}

export default Rolechoice