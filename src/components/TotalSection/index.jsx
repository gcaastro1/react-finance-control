import './style.css'

export const TotalSection = ({ total }) => {
  return (
    <div className='totalContainer'>
      <div className='leftContainer'>
        <h3>Valor total</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <h3 className='txtPrimary'>R$ {total}</h3>
    </div>
    )
}