import '../App.css'
import Nav from '../header/nav/nav'
import imagenPresentacion from '../../imagenes/cabeceras/duster.jpg'
import BajoCabecera from '../header/nav/bajoCabecera'
import Whatsapp from '../main/whatsapp'
import img1 from '../assets/imagenes/duster/d1.jpg'
import img2 from '../assets/imagenes/duster/d7.jpg'
import img3 from '../assets/imagenes/duster/d2.jpg'
import img4 from '../assets/imagenes/duster/d3.jpg'
import img5 from '../assets/imagenes/duster/d6.jpg'
import img6 from '../assets/imagenes/duster/d4.jpg'
import img7 from '../assets/imagenes/duster/d5.jpg'
import img8 from '../assets/imagenes/genericos/k3.jpg'
import img9 from '../assets/imagenes/genericos/k8.jpg'
import img10 from '../assets/imagenes/genericos/k9.jpg'
import img11 from '../assets/imagenes/genericos/pola.jpg'
import img12 from '../assets/imagenes/genericos/kits.jpg'
import { articulosDuster } from '../assets/articulos'

function Duster() {
  return (
    <>
      <header className='header'>
        <Nav />
        <img className='imagenPresentacion1' src={imagenPresentacion} />
        <BajoCabecera titulo={'ACCESORIOS DUSTER'} />
      </header>
      <main className='main'>
        {articulosDuster.map(articulo => (
          <div className='article'>
            <img src={articulo.imagen} />
            <h3 className='descripcion'>{articulo.nombre}</h3>
            <ul>
              
            </ul>
            <div className='valor'>
              <h3>Valor: $</h3>
              <h3 className='Precio'></h3>
            </div>
            <button id='botonAgregar'>Agregar al carrito</button>
          </div>


        ))}
        <Whatsapp />
      </main>
    </>
  )
}

export default Duster