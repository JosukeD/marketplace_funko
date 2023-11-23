import { useEffect, useState } from 'react';
import Tarjeta from './modules/Tarjeta';
import TarjetaCrear from './modules/TarjetaCrear';
import './styles/home.css'

export default function Home() {
  const [funkos, setFunkos] = useState(null)

  async function getFunkos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setFunkos(data);
  }

  useEffect(() => {
    getFunkos()
  }, [])
  
  return (
    <div className='cont-tar-funkos'>
      <TarjetaCrear />
      {funkos ? funkos.map((funko) => (
        <Tarjeta key={funko.id} funko={funko} />
      ))
      : <p>Cargando...</p>}
    </div>
  );
}