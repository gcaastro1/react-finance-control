import React, { useState } from 'react'
import { InputText, InputNumber, InputSelect } from '../Inputs'
import { ButtonPrimary } from '../Button'
import './style.css'

export const Form = ({ addTransation, verifyTransation}) => {

  const [formData, setFormData] = useState({
    description: '', 
    value: '', 
    type: '',
  })

  const insertValue = (e) => {
    e.preventDefault()

    const verifyDesc = verifyTransation(formData.description)
    if(verifyDesc.length > 0) {
      setFormData({...formData, description: ''})
    } else{      
      addTransation(formData)
    }

    setFormData({description: '', value: 0, type: formData.type})
  }

  return (
    <form className='formContainer' onSubmit={insertValue}>
      <div>
        <InputText id='description' placeholder='Digite aqui sua descrição' value={formData.description} event={(e) => setFormData({...formData, description: e.target.value})}> Descrição </InputText>
        <span className='descHelp'>Ex: Compra de roupas.</span>
      </div>
      <div className='rowContainer'>
        <InputNumber id='value' value={formData.value} event={(e) => setFormData({...formData, value: Number(e.target.value)})}> Valor </InputNumber>
        <InputSelect id='type' event={(e) => setFormData({...formData, type: e.target.value})}> Tipo de Valor </InputSelect>
      </div>
      <ButtonPrimary>Inserir Valor</ButtonPrimary>
    </form>
    )
}