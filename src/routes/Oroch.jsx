import '../App.css'
import Nav from '../header/nav/nav'
import imagenPresentacion from '../assets/imagenes/cabeceras/oroch.jpg'
import BajoCabecera from '../header/nav/bajoCabecera'
import Whatsapp from '../main/whatsapp'
import { articulosOroch } from '../assets/articulos'

function Oroch() {
  return (
    <>
      <header className='header'>
        <Nav />
        <img className='imagenPresentacion1' src={imagenPresentacion} />
        <BajoCabecera titulo={'ACCESORIOS OROCH'}/>
      </header>
      <main className='main'>
      {articulosOroch.map(articulo => (
          <div className='article'>
            <img src={articulo.imagen} />
            <h3 className='descripcion'>{articulo.nombre}</h3>
            <ul>
              <li>{articulo.descripcion1}</li>
              <li>{articulo.descripcion2}</li>
              <li>{articulo.descripcion2}</li>
            </ul>
            <div className='valor'>
              <h3>Valor: $</h3>
              <h3 className='Precio'>{articulo.precio}</h3>
            </div>
            <button id='botonAgregar'>Agregar al carrito</button>
          </div>
        ))}
        <Whatsapp />
      </main>
    </>
  )
}

export default Oroch