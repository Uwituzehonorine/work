import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='signup'>

        <input type="text" placeholder="product Name"></input><br></br>
        <input type="text" placeholder="price"></input><br></br>
        <input type="text" placeholder="image"></input><br></br>
        <button >Add New</button>

    </div>
  )
}

export default Signup