import React from 'react'
import './button.css'
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <div>
        <Link className='button' to={props.url}>{props.title}</Link>
    </div>
  )
}

export default Button;