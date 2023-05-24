import { useState } from 'react'
import './style.css'

export const InputText = ({ children, placeholder, id, event, value }) => {
  return (
    <div className='inputContainer'>
      <label htmlFor={id} className='txtGrey4'>{children}</label>
      <input type='text' placeholder={placeholder} id={id} onChange={(e) => event(e)} value={value} required/>
    </div>     
    )
}

export const InputNumber = ({ children, id, event, value }) => {
  return (
    <div className='inputContainer'>
      <label htmlFor={id} className='txtGrey4'>{children}</label>
      <input type='number' id={id} onChange={(e) => event(e)} value={value} placeholder='0' required/>
      <span className='moneyIcon txtGrey4'>R$</span>
    </div>     
    )
}

export const InputSelect = ({ children, id, event }) => {
  return (
    <div className='inputContainer'>
      <label htmlFor={id}>{children}</label>
      <select id={id}  onChange={(e) => event(e)} required>
        <option value=''> Selecione um tipo</option>
        <option value='entries'> Entrada</option>
        <option value='expenses'> Saída</option>

      </select>
    </div>     
    )
}

export const InputRadio = ({ event }) => {
  return (
    <>
      <label>Todos<input type='radio' name='filterRadio' id='all' value='all' onChange={event} defaultChecked/></label>
      <label>Entradas<input type='radio' name='filterRadio' id='entries' value='entries' onChange={event}/></label>
      <label>Saídas<input type='radio' name='filterRadio' id='expenses' value='expenses' onChange={event}/></label>
    </>   
    )
}