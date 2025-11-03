import React, { useState } from 'react'

export const FormComponent = () => {

const [Email, setEmail] = useState('')
const [Password, setPassword] = useState('')

const onClickHandler = ()=>{
}


  return (
    <div>
        <form onSubmit={onClickHandler}>
            <input type="text" placeholder='Enter your email' value={Email}/>
            <input type="text" placeholder='Enter your password' value={Password}/>
        
        
        <button type='submit'>Login</button>
        </form>


    </div>
  )
}
