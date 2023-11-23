import '../App.css'
import Nav from '../header/nav/nav'
import imagenPresentacion from '../../imagenes/cabeceras/stepway.jpg'
import BajoCabecera from '../header/nav/bajoCabecera'
import Articulo1 from '../main/articulo1'
import Whatsapp from '../main/whatsapp'
import img1 from '../assets/imagenes/genericos/k8.jpg'
import img2 from '../assets/imagenes/genericos/k9.jpg'
import img3 from '../assets/imagenes/genericos/k3.jpg'
import img4 from '../assets/imagenes/genericos/pola.jpg'
import img5 from '../assets/imagenes/genericos/kits.jpg'
import img6 from '../assets/imagenes/sandero/ss1.jpg'
import img7 from '../assets/imagenes/sandero/s1.jpg'

function Stepway() {
  return (
    <>
      <header className='header'>
        <Nav />
        <img className='imagenPresentacion1' src={imagenPresentacion} />
        <BajoCabecera titulo={'ACCESORIOS DUSTER'}/>
      </header>
      <main className='main'>
        <Articulo1 imagen={img1} descripcion={'SENSORES DE ESTACIONAMIENTO'} l1={<li>Alerta sonora al acercarse a un objeto.</li>} l2={<li>Regulación de distancia de alerta.</li>} l3={<li>Activa al colocar reversa.</li>} precio={229700}/>
        <Articulo1 imagen={img2} descripcion={'TORNILLOS DE SEGURIDAD'} l1={<li>Kit 4 tornillos de seguridad con llave especial.</li>} l2={<li>Evita la manipulación de llantas con herramientas convencionales.</li>} precio={229700}/>
        <Articulo1 imagen={img3} descripcion={'CAMARA DE RETROCESO'} l1={<li>Cámara adaptada para vincular a MediaNav.</li>} l2={<li>Línea de guía.</li>} l3={<li>Brillo adaptable.</li>} precio={229700}/>
        <Articulo1 imagen={img4} descripcion={'POLARIZADOS'} l1={<li>Polarizados comunes y de seguridad.</li>} l2={<li>Laminas con tonalidad media y clara.</li>} precio={229700}/>
        <Articulo1 imagen={img5} descripcion={'KIT DE SEGURIDAD'} l1={<li>Matafuego homologado 1kg polvo ABC.</li>} l2={<li>Pechera.</li>} l3={<li>Botiquín.</li>} precio={229700}/>
        <Articulo1 imagen={img6} descripcion={'PORTA EQUIPAJE BRACCO'} l1={<li>Fabricadas en hierro reforzado.</li>} l2={<li>Fácil colocación, no requiere hacer modificaciones en el vehículo.</li>} l3={<li>Cuenta con tapas plásticas en las puntas de las barras.</li>} precio={229700}/>
        <Articulo1 imagen={img7} descripcion={'CHAPON CUBRECARTER'} l1={<li>Construidos en chapa acero al carbono 2 mm de espesor.</li>} l2={<li>Otorga protección completa para el cárter del vehículo.</li>} l3={<li>Pintados negro con poliéster en polvo.</li>} precio={229700}/>
        <Whatsapp />
      </main>
    </>
  )
}

export default Stepway