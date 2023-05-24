import React, { useState } from 'react'
import { ButtonPrimary, ButtonGrey } from '../Button'
import { List } from '../List'
import { Form } from '../Form'
import { TotalSection } from '../TotalSection'
import './style.css'
import NuKenzieLogo from '../../assets/logo-black.svg'

export const DashboardPage = ({ event }) => {

  const [transations, setTransations] = useState([])
  const [total, setTotal] = useState(0)
  const [curRadio, setCurRadio] = useState('all')

  /* const handleRadio = (e) => {
    setCurRadio(e.target.value)
  } */


  const verifyTransation = (transationName) => {
    const newArr = transations.filter((transation) => transation.description == transationName) 
    return(newArr)
  }

  const addTransation = (transationData) => {
    setTransations([...transations, transationData])
    console.log(transationData)
    if(transationData.type == 'entries'){
      setTotal(total + transationData.value)
    } else {
      setTotal(total - transationData.value)
    }
  }

  const removeTransation = (transationDesc, transationValue, transationType) => {
    const newArr = transations.filter((transation) => transation.description !== transationDesc)
    setTransations(newArr)
    if(transationType == 'entries'){
      setTotal(total - transationValue)
    } else {
      setTotal(total + transationValue)
    }
  }

  const filteredList = transations.filter((transation) => (
    curRadio === "all" ? true :
    transation.type === curRadio
    ))

  return (
    <>
      <header className='navBar'>
        <div className='navContainer container'>
          <img src={NuKenzieLogo} alt='Logo Nu Kenzie' />
          <nav>
            <ul>
              <li>
                <ButtonGrey event={event}>Inicio</ButtonGrey>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='container mainSpacing'>
        <div className='formTotalContainer'>
          <Form addTransation={addTransation} verifyTransation={verifyTransation}/>
          {transations.length > 0 ? (
            <TotalSection total={total} />
          ) : (
          <></>
          )}
        </div>
        <List removeTransation={removeTransation} filteredList={filteredList} setCurRadio={setCurRadio} />
      </main>
    </>    
    )
}