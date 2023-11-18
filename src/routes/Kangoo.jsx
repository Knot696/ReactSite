import '../App.css'
import Nav from '../header/nav/nav'
import imagenPresentacion from '../assets/imagenes/cabeceras/kangoo.jpg'
import BajoCabecera from '../header/nav/bajoCabecera'
import Articulo1 from '../main/articulo1'
import img1 from '../assets/imagenes/kangoo/k2.jpg'
import img2 from '../assets/imagenes/kangoo/k1.jpg'
import img3 from '../assets/imagenes/genericos/k3.jpg'
import img4 from '../assets/imagenes/kangoo/k5.jpg'
import img5 from '../assets/imagenes/genericos/k8.jpg'
import img6 from '../assets/imagenes/genericos/k9.jpg'
import img7 from '../assets/imagenes/kangoo/k4.jpg'
import img8 from '../assets/imagenes/genericos/k6.jpg'
import img9 from '../assets/imagenes/kangoo/k7.jpg'
import img10 from '../assets/imagenes/kangoo/k10.jpg'
import img11 from '../assets/imagenes/kangoo/k11.jpg'
import img12 from '../assets/imagenes/genericos/pola.jpg'
import img13 from '../assets/imagenes/genericos/kits.jpg'

function Kangoo() {
  return (
    <>
      <header className='header'>
        <Nav />
        <img className='imagenPresentacion1' src={imagenPresentacion} />
        <BajoCabecera titulo={'ACCESORIOS KANGOO'}/>
      </header>
      <main className='main'>
        <Articulo1 imagen={img1} descripcion={'CANASTO DE TECHO'} l1={<li>Cubre totalmente el techo</li>} l2={<li>Pintados negro con poliester en polvo.</li>} l3={<li>Peso máximo soportado 90 Kg.</li>} precio={229700}/>
        <Articulo1 imagen={img2} descripcion={'APOYABRAZOS'} l1={<li>Plegable.</li>} l2={<li>Baulera guardaobjetos.</li>} l3={<li>Parte superior acolchada.</li>} precio={229700}/>
        <Articulo1 imagen={img3} descripcion={'CAMARA DE RETROCESO'} l1={<li>Cámara adaptada para vincular a MediaNav.</li>} l2={<li>Línea de guía.</li>} l3={<li>Brillo adaptable.</li>} precio={229700}/>
        <Articulo1 imagen={img4} descripcion={'LLANTAS DE ALEACION'} l1={<li>Diámetro de la llanta 15 pulgadas.</li>} l2={<li>Color Plateado.</li>} l3={<li>Material Aleación de aluminio.</li>} precio={229700}/>
        <Articulo1 imagen={img5} descripcion={'SENSORES DE ESTACIONAMIENTO'} l1={<li>Alerta sonora al acercarse a un objeto.</li>} l2={<li>Regulación de distancia de alerta.</li>} l3={<li>Activa al colocar reversa.</li>} precio={229700}/>
        <Articulo1 imagen={img6} descripcion={'TUERCAS DE SEGURIDAD'} l1={<li>Kit 4 tornillos de seguridad con llave especial.</li>} l2={<li>Evita la manipulación de llantas con herramientas convencionales.</li>} precio={229700}/>
        <Articulo1 imagen={img7} descripcion={'ENGANCHE BRACCO'} l1={<li>Bastidor de caño 40×40 x3,2 de espesor y caños de 5/8 curvados.</li>} l2={<li>Pintados negro con poliéster en polvo.</li>} precio={229700}/>
        <Articulo1 imagen={img8} descripcion={'MARIPOSERO BRACCO'} l1={<li>Constituido con marco de chapa plegada que encierra una malla de alambre fino.</li>} l2={<li>Se utiliza con el fín de proteger el radiador de toda clase de insectos.</li>} precio={229700}/>
        <Articulo1 imagen={img9} descripcion={'CANASTO DE TECHO BRACCO'} l1={<li>Caño de 1 pulgada x 1.6 de pared, las rejillas de 5/8 x 1.6.</li>} l2={<li>Pintado negro con poliéster en polvo.</li>} precio={229700}/>
        <Articulo1 imagen={img10} descripcion={'CAHPON CUBRECARTER BRACCO'} l1={<li>Construidos en chapa acero al carbono 2 mm de espesor.</li>} l2={<li>Otorga protección completa para el cárter del vehículo.</li>} l3={<li>Pintados negro con poliéster en polvo.</li>} precio={229700}/>
        <Articulo1 imagen={img11} descripcion={'COBERTOR FURGON BRACCO'} l1={<li>Plástico termoformado resistente al sol y productos químicos.</li>} l2={<li>Textura antideslizante de fácil limpieza.</li>} precio={229700}/>
        <Articulo1 imagen={img12} descripcion={'POLARIZADOS'} l1={<li>Polarizados comunes y de seguridad.</li>} l2={<li>Laminas con tonalidad media y clara.</li>} precio={229700}/>
        <Articulo1 imagen={img13} descripcion={'KIT DE SEGURIDAD'} l1={<li>Matafuego homologado 1kg polvo ABC.</li>} l2={<li>Pechera.</li>} l3={<li>Botiquín.</li>} precio={229700}/>
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

export default Kangoo