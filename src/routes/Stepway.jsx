import '../App.css'
import Nav from '../header/nav/nav'
import imagenPresentacion from '../../imagenes/cabeceras/stepway.jpg'
import BajoCabecera from '../header/nav/bajoCabecera'
import Articulo1 from '../main/articulo1'
import Whatsapp from '../main/whatsapp'
import img1 from '../assets/imagenes/sandero/s1.jpg'
import img2 from '../assets/imagenes/sandero/ss1.jpg'
import img8 from '../assets/imagenes/genericos/k3.jpg'
import img9 from '../assets/imagenes/genericos/k8.jpg'
import img10 from '../assets/imagenes/genericos/k9.jpg'
import img11 from '../assets/imagenes/genericos/pola.jpg'
import img12 from '../assets/imagenes/genericos/kits.jpg'

function Stepway() {
  return (
    <>
      <header className='header'>
        <Nav />
        <img className='imagenPresentacion1' src={imagenPresentacion} />
        <BajoCabecera titulo={'ACCESORIOS DUSTER'} />
      </header>
      <main className='main'>
        <Articulo1 imagen={img1} descripcion={'CHAPON CUBRECARTER'} l1={<li>Matafuego homologado 1kg polvo ABC.</li>} l2={<li>Pechera.</li>} l3={<li>Botiquín.</li>} l4={<li>Balizas reflectivas con base.</li>} precio={'59400'} />
        <Articulo1 imagen={img2} descripcion={'PORTAEQUIPAJE BRACCO'} l1={<li>Fabricadas en hierro reforzado.</li>} l2={<li>Fácil colocación, no requiere hacer modificaciones en el vehículo.</li>} l3={<li>Cuenta con tapas plásticas en las puntas de las barras y una capa de goma en la parte superior para no dañar la carga.</li>} precio={'126600'} />
        <Articulo1 imagen={img8} descripcion={'CAMARA RETROCESO'} l1={<li>Cámara adaptada para vincular a MediaNav.</li>} l2={<li>Línea de guía.</li>} l3={<li>Brillo adaptable.</li>} precio={'80100'} />
        <Articulo1 imagen={img9} descripcion={'SENSORES DE ESTACIONAMIENTO'} l1={<li>Alerta sonora al acercarse a un objeto.</li>} l2={<li>Regulación de distancia de alerta.</li>} l3={<li>Activa al colocar reversa.</li>} precio={'101700'} />
        <Articulo1 imagen={img10} descripcion={'TORNILLOS DE SEGURIDAD'} l1={<li>Kit 4 tornillos de seguridad con llave especial.</li>} l2={<li>Evita la manipulación de llantas con herramientas convencionales.</li>} precio={'30000'} />
        <Articulo1 imagen={img11} descripcion={'POLARIZADOS'} l1={<li>Polarizados comunes y de seguridad.</li>} l2={<li>Laminas con tonalidad media y clara.</li>} precio={'47300'} />
        <Articulo1 imagen={img12} descripcion={'KIT SEGURIDAD'} l1={<li>Matafuego homologado 1kg polvo ABC.</li>} l2={<li>Pechera.</li>} l3={<li>Botiquín.</li>} l4={<li>Balizas reflectivas con base.</li>} precio={'38200'} />
        <Whatsapp />
      </main>
    </>
  )
}

export default Stepway