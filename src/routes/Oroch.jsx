import '../App.css'
import Nav from '../header/nav/nav'
import imagenPresentacion from '../../imagenes/cabeceras/oroch.jpg'
import BajoCabecera from '../header/nav/bajoCabecera'
import Articulo1 from '../main/articulo1'
import Whatsapp from '../main/whatsapp'
import img1 from '../assets/imagenes/oroch/o3.jpg'
import img2 from '../assets/imagenes/oroch/o1.jpg'
import img3 from '../assets/imagenes/oroch/o4.jpg'
import img4 from '../assets/imagenes/oroch/o2.jpg'
import img5 from '../assets/imagenes/oroch/o5.jpg'
import img6 from '../assets/imagenes/oroch/o6.jpg'
import img7 from '../assets/imagenes/oroch/o7.jpg'
import img8 from '../assets/imagenes/duster/d2.jpg'
import img9 from '../assets/imagenes/genericos/k8.jpg'
import img10 from '../assets/imagenes/genericos/k9.jpg'
import img11 from '../assets/imagenes/genericos/pola.jpg'
import img12 from '../assets/imagenes/genericos/kits.jpg'
import img13 from '../assets/imagenes/genericos/k3.jpg'

function Oroch() {
  return (
    <>
      <header className='header'>
        <Nav />
        <img className='imagenPresentacion1' src={imagenPresentacion} />
        <BajoCabecera titulo={'ACCESORIOS OROCH'}/>
      </header>
      <main className='main'>
        <Articulo1 imagen={img1} descripcion={'DEFENSA FRONTAL'} l1={<li>Plástico termoformado resistente al sol y productos químicos.</li>} l2={<li>Textura antideslizante de fácil limpieza.</li>} precio={'174400'}/>
        <Articulo1 imagen={img2} descripcion={'PORTA EQUIPAJE'} l1={<li>Fabricadas en hierro reforzado.</li>} l2={<li>Fácil colocación, no requiere hacer modificaciones en el vehículo.</li>} l3={<li>Cuenta con tapas plásticas en las puntas de las barras y una capa de goma en la parte superior para no dañar la carga.</li>} precio={'106600'}/>
        <Articulo1 imagen={img3} descripcion={'BARRA SAN ANTONIO'} l1={<li>Compatible con lona marítima.</li>} l2={<li>Ayuda a transportar cargas y objetos.</li>} precio={'356400'}/>
        <Articulo1 imagen={img4} descripcion={'KIT BARREROS'} l1={<li>kit de guardabarros.</li>} l2={<li>Protege eficazmente el bajo de carrocería del barro.</li>} precio={'62200'}/>
        <Articulo1 imagen={img5} descripcion={'LONA MARITIMA'} l1={<li>Manija apertura con cable de acero.</li>} l2={<li>Cierre con resorte.</li>} l3={<li>Grampa de fijación con bulón oculto.</li>} precio={'220400'}/>
        <Articulo1 imagen={img6} descripcion={'DEFLECTORES DE LLUVIA'} l1={<li>Acrílico resistente.</li>} l2={<li>Adhesivo.</li>} precio={'41800'}/>
        <Articulo1 imagen={img7} descripcion={'ESTRIBOS'} l1={<li>Protegen la carrocería para entrar y salir del vehículo con mayor facilidad.</li>} l2={<li>Pisaderas antideslizantes y punteras de inyección plástica.</li>} l3={<li>Fijados al chasis.</li>} precio={'25200'}/>
        <Articulo1 imagen={img8} descripcion={'APOYABRAZOS'} l1={<li>Plegable.</li>} l2={<li>Baulera guardaobjetos.</li>} l3={<li>Parte superior acolchada.</li>} precio={'100100'}/>
        <Articulo1 imagen={img9} descripcion={'SENSORES DE ESTACIONAMIENTO'} l1={<li>Alerta sonora al acercarse a un objeto.</li>} l2={<li>Regulación de distancia de alerta.</li>} l3={<li>Activa al colocar reversa.</li>} precio={'101700'}/>
        <Articulo1 imagen={img13} descripcion={'CAMARA DE RETROCESO'} l1={<li>Cámara adaptada para vincular a MediaNav.</li>} l2={<li>Línea de guía.</li>} l3={<li>Brillo adaptable.</li>} precio={'80100'}/>
        <Articulo1 imagen={img10} descripcion={'TORNILLOS DE SEGURIDAD'} l1={<li>Kit 4 tornillos de seguridad con llave especial.</li>} l2={<li>Evita la manipulación de llantas con herramientas convencionales.</li>} precio={'30000'}/>
        <Articulo1 imagen={img11} descripcion={'POLARIZADOS'} l1={<li>Polarizados comunes y de seguridad.</li>} l2={<li>Laminas con tonalidad media y clara.</li>} precio={'47300'}/>
        <Articulo1 imagen={img12} descripcion={'KIT SEGURIDAD'} l1={<li>Matafuego homologado 1kg polvo ABC.</li>} l2={<li>Pechera.</li>} l3={<li>Botiquín.</li>} l4={<li>Balizas reflectivas con base.</li>} precio={'38200'}/>
        <Whatsapp />
      </main>
    </>
  )
}

export default Oroch