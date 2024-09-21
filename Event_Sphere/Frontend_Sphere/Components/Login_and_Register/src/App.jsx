import { useState } from 'react'

function App() {

  return (
    <>
      <div className="main-home" style={{width:'100vw',height:'100vh',backgroundColor:'black',color:'white',
      display:'flex',flexDirection:'column',justifyContent:'center',
      alignItems:'center'
      }}>
      <h1 style={{margin:'3vh'}}>This would be our Home Page</h1>
      <ol>
        <li style={{margin:'2vh'}}> <h3>Type /login at last of url to go to login page or link: <a style={{color:'green',fontWeight:'800'}} href="/access-account">Log In</a></h3> </li>
      </ol>
      </div>
    </>
  )
}

export default App
