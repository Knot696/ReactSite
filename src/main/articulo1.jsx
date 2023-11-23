import './articulo.css'
import { useState } from 'react';


function Articulo1({imagen, descripcion, l1, l2, l3, l4, l5, precio}) {

  const [item, setItem] = useState(false);

  const agregar = () => {
    setItem(true);
  }

  return (
    <div className='article'>
      <img src={imagen} />
      <h3 className='descripcion'>{descripcion}</h3>
      <ul>
        {l1}
        {l2}
        {l3}
        {l4}
        {l5}
      </ul>
      <div className='valor'>
        <h3>Valor: $</h3>
        <h3 className='Precio'>{precio}</h3>
      </div>
      <button id='botonAgregar' onClick={agregar}>Agregar al carrito</button>
      <h5 className={`pieItem${item ? " pieItem1" : ""}`}>Item agregado al carrito</h5>
    </div>
  )
}

export default Articulo1