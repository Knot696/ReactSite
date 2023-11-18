import '../App.css'
import Nav from '../header/nav/nav'
import imagenPresentacion from '../assets/imagenes/cabeceras/logan.jpg'
import BajoCabecera from '../header/nav/bajoCabecera'
import Articulo1 from '../main/articulo1'
import img1 from '../assets/imagenes/genericos/k8.jpg'
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

function Logan() {
  return (
    <>
      <header className='header'>
        <Nav />
        <img className='imagenPresentacion1' src={imagenPresentacion} />
        <BajoCabecera titulo={'ACCESORIOS DUSTER'}/>
      </header>
      <main className='main'>
        <Articulo1 imagen={img1} descripcion={'DEFENSA FRONTAL'} lista={<li>Plástico termoformado resistente al sol y productos químicos.</li>} precio={'229700'}/>
        <Articulo1 imagen={img2} descripcion={'Lona marítima colocada en Ford Ranger.'} />
        <Articulo1 imagen={img3} descripcion={'Jaula caño doble inoxidable colocada en Ford Ranger.'} />
        <Articulo1 imagen={img4} descripcion={'Lona marítima colocada en Renault Alaskan.'} />
        <Articulo1 imagen={img5} descripcion={'Enganche reforzado colocado en Renault Alaskan'} />
        <Articulo1 imagen={img6} descripcion={'Polarizado tonalidad intermedia Renault Alaskan'} />
        <Articulo1 imagen={img7} descripcion={'Polarizado tonalidad intermedia Renault Alaskan'} />
        <Articulo1 imagen={img8} descripcion={'Polarizado tonalidad intermedia Renault Captur'} />
        <Articulo1 imagen={img9} descripcion={'Polarizado tonalidad intermedia Renault Captur'} />
        <Articulo1 imagen={img10} descripcion={'Polarizado tonalidad intermedia Renault Kangoo II'} />
        <Articulo1 imagen={img11} descripcion={'Polarizado tonalidad intermedia Renault Kangoo II'} />
        <Articulo1 imagen={img12} descripcion={'Cola escape Renault Alaskan'} />
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

export default Logan