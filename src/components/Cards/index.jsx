import { ButtonGrey } from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export const EmptyCard = () => {
  return (
    <li className='cardContainer'>
      <div className='cardBody emptyBody'>
        <span className='borderGrey'></span>
        <div className='emptyTop'></div>
        <div className='emptyBottom'></div>
      </div>
    </li>
    )
}

export const Card = ({ description, type, value, removeTransation}) => {
  return (
    <li className='cardContainer'>
      <div className='cardBody fullBody'>
      {type == 'entries' ? ( 
        <span className='borderGreen'></span> 
        ) : ( 
        <span className='borderGrey'></span> 
      )}     
      <div className='leftContainer'>
        <h3>{description}</h3>
        { type == 'entries' ? (
          <p>Entrada</p>
        ) : (
          <p>Saída</p>
        )}
      </div>
      <div className='rightContainer'>
        <p>R$ {value}</p>
        <div>
          <ButtonGrey event={() => removeTransation(description, value, type)}><FontAwesomeIcon icon={faTrash} /></ButtonGrey>
        </div>
      </div>
      </div>
    </li>
    )
}