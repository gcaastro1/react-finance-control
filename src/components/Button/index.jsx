import React from 'react'
import './style.css'

export const ButtonPrimary = ({ children, event }) => {
  return (
    <button className='btnPrimary' onClick={event}>{children}</button>
    )
}

export const ButtonGrey = ({ children, event }) => {
  return (
    <button className='btnGrey' onClick={event}>{children}</button>
    )
}