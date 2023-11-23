import React, { useState } from 'react';
import './User.css';
import userFoto from './resources/User1.jpeg';

function UserProfile() {
  const [modalActivo, setModalActivo] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const user = {
    nombre: 'Juan',
    apellido: 'Pérez',
    foto: userFoto,
    boletas: 5,
    billetera: 100,
    carrito: ['Producto 1', 'Producto 2', 'Producto 3']
  };

  const handleClick = (producto) => {
    setProductoSeleccionado(producto);
    setModalActivo(true);
  };

  return (
    <div className="user-profile">
      <img src={user.foto} alt="Foto del usuario" />
      <h1>{user.nombre} {user.apellido}</h1>
      <p>Boletas: {user.boletas}</p>
      <p>Billetera: ${user.billetera}</p>
      <h2>Carrito de compras:</h2>
      <ul>
        {user.carrito.map((producto, index) => (
          <li key={index} onClick={() => handleClick(producto)}>{producto}</li>
        ))}
      </ul>
      {modalActivo && <DescripcionProducto producto={productoSeleccionado} setModalActivo={setModalActivo} />}
    </div>
  );
}

export default UserProfile;
