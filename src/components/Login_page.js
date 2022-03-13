import React from 'react'




function Login_page() {
  return (
    <div className='login_page'>
      <h1> Welcome User Login here </h1>
      <form>
      
      <input type="text"
      placeholder='name'>
      </input>
      
      <input type="email"
      placeholder='email'>
      </input>  
      
      <input type="password" 
      placeholder="Password">
      </input>
      
      </form>  
    </div>
  )
}

export default Login_page