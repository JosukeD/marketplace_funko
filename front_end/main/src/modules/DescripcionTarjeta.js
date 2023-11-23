import './styles/descripcionTarjeta.css'
import imagen from '../resources/FUNKO-1.jpg'

const DescripcionTarjeta = ({setDescripcionTarjetaActivo, funko}) => {
  const handleClick = () => {
    setDescripcionTarjetaActivo(false)
  }
  const cambiarFunko = (e) => {
    const funkoSeleccionado = funkos.find(funko => funko.name === e.target.value)
    setFunko(funkoSeleccionado)
  }
  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h3>{funko.name}</h3>
        <img src={imagen} />
        <p>{funko.username}</p>
        <button>Añadir</button>
      </div>
    </div>
  )
}

export default DescripcionTarjeta