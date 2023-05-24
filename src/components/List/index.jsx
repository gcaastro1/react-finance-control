import { InputRadio } from '../Inputs/'
import { EmptyCard, Card } from '../Cards'
import './style.css'
import { useState } from 'react'

export const List = ({ removeTransation, filteredList, setCurRadio }) => {
  const emptyCards = [1, 2, 3]

  return (
    <div className='dashContainer'>
      <div className='headerContainer'>
        <h3>Resumo financeiro</h3>
        <div className='filterContainer'>
          <InputRadio name='filterRadio' id='all' value='all' event={(e) => setCurRadio(e.target.value)}/>
        </div>
      </div>

      {filteredList.length > 0 ? (
        <>
          <ul className='listContainer'>
            { filteredList.map((card, index) => (
              <Card key={index} description={card.description} type={card.type} value={card.value} removeTransation={removeTransation} />
            ))}
          </ul>
        </>
      ) 
      : (
        <div className='listSpacing'>
          <h2 className='txtGrey4'>Você ainda não possui nenhum lançamento</h2>
          <ul className='listContainer'>
            { emptyCards.map((card, index) => (
              <EmptyCard  key={index}/>
            ))
            }
          </ul>
        </div>
      )}

    {/* 
      {finances.length > 0 ? (        
        <ul className='listContainer'>
          { finances.map((card, index) => (
            <Card key={index} description={card.description} type={card.type} value={card.value} index={index} array={finances} setFinances={setFinances}/>
          ))
        }
        </ul>
        ) : (   
        
        )} */}
    </div>
    
  )
}