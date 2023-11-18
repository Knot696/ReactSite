import '../App.css'
import Nav from '../header/nav/nav'
import imagenPresentacion from '../assets/imagenes/cabeceras/alaskan.jpg'
import BajoCabecera from '../header/nav/bajoCabecera'
import Articulo1 from '../main/articulo1'
import img1 from '../assets/imagenes/alaskan/1.jpg'
import img2 from '../assets/imagenes/alaskan/2.jpg'
import img3 from '../assets/imagenes/alaskan/4.jpg'
import img4 from '../assets/imagenes/alaskan/5.jpg'
import img5 from '../assets/imagenes/alaskan/18.jpg'
import img6 from '../assets/imagenes/alaskan/19.jpg'
import img7 from '../assets/imagenes/alaskan/20.jpg'
import img8 from '../assets/imagenes/alaskan/22.jpg'
import img9 from '../assets/imagenes/genericos/pola.jpg'
import img10 from '../assets/imagenes/genericos/k8.jpg'
import img11 from '../assets/imagenes/alaskan/3.jpg'
import img12 from '../assets/imagenes/alaskan/6.jpg'
import img13 from '../assets/imagenes/alaskan/14.jpg'
import img14 from '../assets/imagenes/alaskan/16.jpg'
import img15 from '../assets/imagenes/alaskan/9.jpg'
import img16 from '../assets/imagenes/alaskan/11.jpg'
import img17 from '../assets/imagenes/alaskan/10.jpg'
import img18 from '../assets/imagenes/alaskan/12.jpg'
import img19 from '../assets/imagenes/alaskan/13.jpg'
import img20 from '../assets/imagenes/alaskan/7.jpg'
import img21 from '../assets/imagenes/alaskan/15.jpg'
import img22 from '../assets/imagenes/alaskan/21.jpg'
import img23 from '../assets/imagenes/genericos/kits.jpg'

function Alaskan() {
  return (
    <>
      <header className='header'>
        <Nav />
        <img className='imagenPresentacion1' src={imagenPresentacion} />
        <BajoCabecera titulo={'ACCESORIOS ALASKAN'}/>
      </header>
      <main className='main'>
        <Articulo1 imagen={img1} descripcion={'JAULA NEGRA'} l1={<li>Jaula caño tubular simple.</li>} l2={<li>Base para lona marítima.</li>} l3={<li>Bulonería con tratamiento anticorrosión.</li>} precio={250600}/>
        <Articulo1 imagen={img2} descripcion={'JAULA CROMADA'} l1={<li>Jaula cromada caño tubular simple.</li>} l2={<li>Base para lona marítima.</li>} l3={<li>Bulonería con tratamiento anticorrosión.</li>} precio={344200}/>
        <Articulo1 imagen={img3} descripcion={'LONA MARITIMA'} l1={<li>Manija apertura con cable de acero.</li>} l2={<li>Cierre con resorte.</li>} l3={<li>Grampa de fijación con bulón oculto.</li>} precio={182900}/>
        <Articulo1 imagen={img4} descripcion={'COBERTOR'} l1={<li>Plástico termoformado resistente al sol y productos químicos.</li>} l2={<li>Textura antideslizante de fácil limpieza.</li>} precio={182200}/>
        <Articulo1 imagen={img5} descripcion={'DEFLECTORES DE LLUVIA'} l1={<li>Acrilico resistente.</li>} l2={<li>Adhesivo .</li>} precio={69000}/>
        <Articulo1 imagen={img6} descripcion={'KIT FENDERS'} l1={<li>Plástico termoformado resistente al sol y productos químicos.</li>} l2={<li>Incluye kit limpiador de superficie para adhesivo.</li>} precio={381800}/>
        <Articulo1 imagen={img7} descripcion={'PROTECCION FRONTAL'} l1={<li>Plástico termoformado resistente al sol y productos químicos.</li>} l2={<li>Textura antideslizante de fácil limpieza.</li>} precio={213400}/>
        <Articulo1 imagen={img8} descripcion={'TUERCAS DE SEGURIDAD'} l1={<li>Kit 4 tuercas de seguridad con llave especial.</li>} l2={<li>Evita la manipulación de llantas con herramientas convencionales.</li>} precio={56500}/>
        <Articulo1 imagen={img9} descripcion={'POLARIZADO'} l1={<li>Polarizados comunes y de seguridad.</li>} l2={<li>Laminas con tonalidad media y clara.</li>} precio={47300}/>
        <Articulo1 imagen={img10} descripcion={'SENSORES DE ESTACIONAMIENTO'} l1={<li>Alerta sonora al acercarse a un objeto.</li>} l2={<li>Regulación de distancia de alerta.</li>} l3={<li>Activa al colocar reversa.</li>} precio={101700}/>
        <Articulo1 imagen={img11} descripcion={'TALAMPAYA INOXIDABLE'} l1={<li>Estructura de caño en una sola pieza acero inoxidable.</li>} l2={<li>Terminación pulido espejo.</li>} l3={<li>No sobrepasa la línea del paragolpes.</li>} precio={229700}/>
        <Articulo1 imagen={img12} descripcion={'TALAMPAYA NEGRA'} l1={<li>Estructura de caño en una sola pieza.</li>} l2={<li>Terminación pulido espejo.</li>} l3={<li>No sobrepasa la línea del paragolpes.</li>} precio={227400}/>
        <Articulo1 imagen={img13} descripcion={'ENGANCHE REFORZADO'} l1={<li>Bastidor de caño 60×60 x3,2 de espesor.</li>} l2={<li>Pintados negro con poliester en polvo.</li>} l3={<li>Anclaje totalmente al chasis.</li>} precio={214000}/>
        <Articulo1 imagen={img14} descripcion={'ENGANCHE COMUN'} l1={<li>Bastidor de caño 40×40 x3,2 de espesor.</li>} l2={<li>Pintados negro con poliéster en polvo.</li>} precio={159000}/>
        <Articulo1 imagen={img15} descripcion={'JAULA CAÑO DOBLE INOXIDABLE'} l1={<li>Tubos de acero inoxidable.</li>} l2={<li>Terminación pulido espejo.</li>} l3={<li>Bases para todo tipo de lona.</li>} precio={376400}/>
        <Articulo1 imagen={img16} descripcion={'JAULA CAÑO DOBLE NEGRA'} l1={<li>Tubos de acero al carbono.</li>} l2={<li>Pintada negra con poliester en polvo.</li>} l3={<li>Bases para todo tipo de lona.</li>} precio={250600}/>
        <Articulo1 imagen={img17} descripcion={'JAULA CAÑO SIMPLE INOXIDABLE'} l1={<li>Estructura de caño en una sola pieza.</li>} l2={<li>Terminación pulido espejo.</li>} l3={<li>No sobrepasa la línea del paragolpes.</li>} precio={290800}/>
        <Articulo1 imagen={img18} descripcion={'JAULA CAÑO SIMPLE NEGRA'} l1={<li>Tubos de acero al carbono.</li>} l2={<li>Pintada negra con poliester en polvo.</li>} l3={<li>Bases para todo tipo de lona.</li>} precio={224000}/>
        <Articulo1 imagen={img19} descripcion={'JAULA TRABAJO'} l1={<li>Jaula despiezada para fácil trasporte.</li>} l2={<li>Tubos de acero al carbono.</li>} l3={<li>Pintada negra con poliester en polvo.</li>} precio={287500}/>
        <Articulo1 imagen={img20} descripcion={'ESTRIBOS SIMIL ORIGINAL'} l1={<li>Perfil de aluminio estrusado con tratamiento anodizado natural.</li>} l2={<li>Pisaderas antideslizantes y punteras de inyección plástica.</li>} l3={<li>Fijados al chasis.</li>} precio={301900}/>
        <Articulo1 imagen={img21} descripcion={'ESTRIBOS OVALES'} l1={<li>Caño de 3,5 ovalado.</li>} l2={<li>Pisaderas antideslizantes y punteras de inyección plástica.</li>} l3={<li>Fijados al chasis con soportes específicos.</li>} precio={362700}/>
        <Articulo1 imagen={img22} descripcion={'TAPA RIGIDA'} l1={<li>Componentes ensamblados y sellados con siliconas especiales.</li>} l2={<li>Resistente a las inclemencias del tiempo.</li>} l3={<li>Fácil de operar en el uso diario.</li>} precio={570800}/>
        <Articulo1 imagen={img23} descripcion={'KIT SEGURIDAD'} l1={<li>Matafuego homologado 1kg polvo ABC.</li>} l2={<li>Pechera.</li>} l3={<li>Botiquín.</li>} l4={<li>Balizas reflectivas con base.</li>} precio={38200}/>
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

export default Alaskan