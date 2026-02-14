import React from 'react'
import { Link } from "react-router-dom";
import "./Landing.css"
import Todoimage from  "C:/Users/niran/development/Todo app project/Frontend/src/assets/Todoimage.jpeg"


const Landing = () => {
  return (
    <div className='landingclass'>
      <div className="intro-text">
        <h1>
          <span className='tagline1'>Organize work and life</span>
          <br/>
          <span className='tagline2'>finally</span>
        </h1>
        <p>
          Type into todo filed<br/>
          Natural language Recognisation and auto fill.
        </p>
        <Link className='btn red' to='/register'>Register Now!</Link>
        <Link className='btn blue' to='/login'>Login!</Link>
      </div>
      <div className='Logo'>
        <img src={Todoimage} alt='Todo image' width={"150%"} height={600}/>
      </div>
    </div>
  )
}

export default Landing