import { useState } from 'react'
import ModalCrearFunco from './ModalCrearFunco'
import './styles/tarjetaCrear.css'

const TarjetaCrear = () => {
  const [modalCrearFuncoActivo, setModalCrearFunco] = useState(false)

  const handleClick = () => {
    setModalCrearFunco(!modalCrearFuncoActivo)
  }

  return (
    <>
      <div className='tarjeta-crear' onClick={handleClick}>
        <h3>CREAR FUNKO</h3>
      </div>
      {modalCrearFuncoActivo 
        && <ModalCrearFunco
          setModalCrearFunco={setModalCrearFunco}
        />
      }
    </>
  )
}

export default TarjetaCrear