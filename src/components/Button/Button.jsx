import React from 'react'
import styling from './Button.module.css'

const Button = ({children}) => {
  return (
     <button className={styling.btn}>{children}</button>
  )
}

export default Button