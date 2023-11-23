import './styles/descripcionTarjeta.css'
import './styles/modalCrearFunco.css'

const ModalCrearFunco = ({ setModalCrearFunco }) => {
  const handleClick = () => {
    setModalCrearFunco(false)
  }
  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <form>
          <h3>Crear Funko</h3>
          <input type='text' placeholder='Nombre' />
          <input type='text' placeholder='Imagen' />
          <textarea type='text' placeholder='Descripcion' />
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default ModalCrearFunco