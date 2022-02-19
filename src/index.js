import React from 'react'
import styles from './styles.module.css'



export const Button = ({...props}) => {

  return(
      <button {...props} className={`${styles.button} 
      ${ 
        props.effect ==="glow" 
        ? styles.glow 
        : props.effect === 'door' 
        ? styles.door 
        : props.effect === 'shutterUp'
        ? styles.shutterUp
        : props.effect === 'shutterDown'
        ? styles.shutterDown
        : props.effect ===  'double'
        ? styles.double
        : props.effect === 'border'
        ? styles.border
        : ''
        }
        ${props.className ? props.className : ''}`}>{props.text}</button>

  )
}