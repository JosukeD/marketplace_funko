import { useState } from 'react'
import imagen from '../resources/FUNKO-1.jpg'
import './styles/tarjeta.css'
import DescripcionTarjeta from './DescripcionTarjeta'



const Tarjeta = ({funko}) => {
  const [descripcionTarjetaActivo, setDescripcionTarjetaActivo] = useState(false)

  const handleClick = () => {
    setDescripcionTarjetaActivo(!descripcionTarjetaActivo)
  }
  
  return (
    <div>
      <div onClick={handleClick} className='contenedor-tarjeta'>
        <h3>{funko.name}</h3>
        <hr />
        <img src={imagen} />
      </div>
      {descripcionTarjetaActivo 
      && <DescripcionTarjeta
        funko={funko}
        setDescripcionTarjetaActivo={setDescripcionTarjetaActivo}
      />}
    </div>
  )
}

export default Tarjeta