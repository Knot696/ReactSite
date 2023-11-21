import './articulo.css'

function Articulo1({imagen, descripcion, l1, l2, l3, l4, l5, precio}) {

  

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
        <button id='botonAgregar'>Agregar al carrito</button>
    </div>
  )
}

export default Articulo1