import React from 'react'
import { ButtonPrimary } from '../Button'
import './style.css'
import NuKenzieLogo from '../../assets/logo.svg'
import CardOne from '../../assets/home-1.svg'
import CardTwo from '../../assets/home-2.svg'
import CardThree from '../../assets/home-3.svg'

export const IndexPage = ({ event }) => {
  return (
    <div className='bgDark'>
      <div className='container mainContainer'>
        <div className='infoContainer'>
          <img src={NuKenzieLogo} alt='Logo NuKenzie' className='logoKenzie'/>
          <h1 className='txtGrey-1'>Centralize o controle das suas finanças</h1>
          <p className='txtGrey-1'>de forma rápida e segura</p>
          <div className='buttonContainer'>
            <ButtonPrimary event={event}>Iniciar</ButtonPrimary>
          </div>
        </div>
        <div className='illBg'>
          <div className='illContainer'>
            <img src={CardOne} className='cardOne'/>
            <div className='illContainerChildren'>
              <img src={CardTwo} className='cardTwo'/>
              <img src={CardThree} className='cardThree'/>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    )
}