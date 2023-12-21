import Nav from '../header/nav/nav'
import '../App.css'
import imagenPresentacion from '../../public/imagenes/cabeceras/cabecera1.jpg'
import BajoCabecera from '../header/nav/bajoCabecera'
import Articulo from '../main/articulo'
import Whatsapp from '../main/whatsapp'
import img1 from '../../public/imagenes/colocados/t1.jpg'
import img2 from '../../public/imagenes/colocados/t4.jpg'
import img3 from '../../public/imagenes/colocados/t5.jpg'
import img4 from '../../public/imagenes/colocados/t11.jpg'
import img5 from '../../public/imagenes/colocados/t12.jpg'
import img6 from '../../public/imagenes/colocados/t9.jpg'
import img7 from '../../public/imagenes/colocados/t10.jpg'
import img8 from '../../public/imagenes/colocados/t13.jpg'
import img9 from '../../public/imagenes/colocados/t14.jpg'
import img10 from '../../public/imagenes/colocados/t7.jpg'
import img11 from '../../public/imagenes/colocados/t6.jpg'
import img12 from '../../public/imagenes/colocados/t15.jpg'
import img13 from '../../public/imagenes/colocados/t16.jpg'
import img14 from '../../public/imagenes/colocados/t17.jpg'
import img15 from '../../public/imagenes/colocados/t18.jpg'
import img16 from '../../public/imagenes/colocados/t19.jpg'

function Inicio() {
  return (
    <>
      <header className='header'>
        <Nav />
        <img className='imagenPresentacion' src={imagenPresentacion} />
        <BajoCabecera titulo={'ACCESORIOS COLOCADOS'} />
      </header>
      <main className='main'>
        <Articulo imagen={img1} descripcion={'Estribos ovales colocados en Ford Ranger.'} />
        <Articulo imagen={img2} descripcion={'Lona marítima colocada en Ford Ranger.'} />
        <Articulo imagen={img3} descripcion={'Jaula caño doble inoxidable colocada en Ford Ranger.'} />
        <Articulo imagen={img4} descripcion={'Lona marítima colocada en Renault Alaskan.'} />
        <Articulo imagen={img5} descripcion={'Enganche reforzado colocado en Renault Alaskan'} />
        <Articulo imagen={img6} descripcion={'Polarizado tonalidad intermedia Renault Alaskan'} />
        <Articulo imagen={img7} descripcion={'Polarizado tonalidad intermedia Renault Alaskan'} />
        <Articulo imagen={img8} descripcion={'Polarizado tonalidad intermedia Renault Captur'} />
        <Articulo imagen={img9} descripcion={'Polarizado tonalidad intermedia Renault Captur'} />
        <Articulo imagen={img10} descripcion={'Polarizado tonalidad intermedia Renault Kangoo II'} />
        <Articulo imagen={img11} descripcion={'Polarizado tonalidad intermedia Renault Kangoo II'} />
        <Articulo imagen={img12} descripcion={'Cola escape Renault Alaskan'} />
        <Articulo imagen={img13} descripcion={'Defensa frontal Renault Alaskan'} />
        <Articulo imagen={img14} descripcion={'Deflectores lluvia Renault Alaskan'} />
        <Articulo imagen={img15} descripcion={'Fenders Renault Alaskan'} />
        <Articulo imagen={img16} descripcion={'Lona marítima Ford Ranger'} />
        <Whatsapp />
      </main>
      <footer className='footer'>
        <p>Teléfonos: 03468-471876/471546 Celular: 3468-437548</p>
        <p>Mail: jgiorgirepuestos@gmail.com</p>
        <p>Horarios: Lunes a Viernes 08:00 a 12:00hs | Sábados 08:00 a 12:00hs</p>
        <p>Dirección: Av. Juan Domingo Perón 1452, Monte Maíz, Cba.</p>
      </footer>
    </>
  )
}

export default Inicio