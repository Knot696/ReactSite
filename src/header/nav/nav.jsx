import './nav.css'
import { useState } from 'react'
import imagenMenu from '../../assets/imagenes/items/menu.png'
import logo from '../../assets/imagenes/items/logo.png'
import alaskan from '../../assets/imagenes/items/autos/alaskan.png'
import kangoo from '../../assets/imagenes/items/autos/kangoo.png'
import duster from '../../assets/imagenes/items/autos/duster.png'
import oroch from '../../assets/imagenes/items/autos/oroch.png'
import sandero from '../../assets/imagenes/items/autos/sandero.png'
import stepway from '../../assets/imagenes/items/autos/stepway.png'
import logan from '../../assets/imagenes/items/autos/logan.png'
import cierre from '../../assets/imagenes/items/x1.png'
import cierre1 from '../../assets/imagenes/items/x.png'
import logoFace from '../../assets/imagenes/items/logoface1.png'
import logoInsta from '../../assets/imagenes/items/logoinsta1.png'
import logoWeb from '../../assets/imagenes/items/logoweb1.png'
import logoFace1 from '../../assets/imagenes/items/logoface.png'
import logoInsta1 from '../../assets/imagenes/items/logoinsta.png'
import logoWeb1 from '../../assets/imagenes/items/logoweb.png'
import botonCarrito from '../../assets/imagenes/items/carrito.jpg'
import check from '../../assets/imagenes/items/check.png'
import { Link } from 'react-router-dom'



function Nav({ valor, allProducts, setAllProdcuts, articulo }) {

  const [carrito, setCarrito] = useState(false);

  const abrirCarrito = () => {
    setCarrito(true);
  }
  const cerrarCarrito = () => {
    setCarrito(false);
  }

  const [formulario, setformulario] = useState(false);

  const abrirformulario = () => {
    setformulario(true);
  }
  const cerrarformulario = () => {
    setformulario(false);
  }

  const [desplegable, setDesplegable] = useState(false);

  const abrirDesplegable = () => {
    setDesplegable(true);
  }
  const cerrarDesplegable = () => {
    setDesplegable(false);
  }

  const [vehiculos, setVehiculos] = useState(false);

  const abrirVehiculos = () => {
    setVehiculos(true);
  }
  const cerrarVehiculos = () => {
    setVehiculos(false);
  }

  const [ubicacion, setUbicacion] = useState(false);

  const abrirUbicacion = () => {
    setUbicacion(true);
  }
  const cerrarUbicacion = () => {
    setUbicacion(false);
  }

  const [redes, setRedes] = useState(false);

  const abrirRedes = () => {
    setRedes(true);
  }
  const cerrarRedes = () => {
    setRedes(false);
  }

  return (
    <>
      <nav>
        <img className="menu" onClick={abrirDesplegable} src={imagenMenu} />
        <div className={`desplegable${desplegable ? " desplegable1" : ""}`}>
          <div className="cierre">
            <a href="http://localhost:5173/">Algunos de nuestros trabajos</a>
            <img src={cierre1} className="cierreCarrito" onClick={cerrarDesplegable} />
          </div>
          <h4>ACCESORIOS POR VEHÍCULOS</h4>
          <Link to="/Alaskan">Alaskan</Link>
          <Link to="/Kangoo">Kangoo II</Link>
          <Link to="/Duster">Duster</Link>
          <Link to="/Oroch">Oroch</Link>
          <Link to="/Sandero">Sandero</Link>
          <Link to="/Stepway">Stepway</Link>
          <Link to="/Logan">Logan</Link>
          <h4>DONDE NOS ENCONTRÁS</h4>
          <iframe className="gmap_canvas" width="100%" height="100%" src="https://maps.google.com/maps?q=avenida+juan+omingo+peron+1452%2C+monte+maiz%2C+cordoba%2C+argentina&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          <h4>NUESTRAS REDES</h4>
          <div class="redes">
            <a href="https://www.facebook.com/jorgegiorgiaccesorios/" target="_blank"><img src={logoFace1} /></a>
            <a href="https://www.instagram.com/jorgegiorgiservicios/" target="_blank"><img src={logoInsta1} /></a>
            <a href="https://www.jorgegiorgi.com/" target="_blank"><img src={logoWeb1} /></a>
          </div>
        </div>
        <img className='logo1' src={logo} />
        <img className="botonCarrito" onClick={abrirCarrito} src={botonCarrito} />
        <div className={`carrito${carrito ? " carrito1" : ""}`}>
          <h3 className="tituloCarrito">CARRITO</h3>
          <img className="cierreCarrito" onClick={cerrarCarrito} src={cierre} />
          <div className="itemsCarrito">
          </div>
          <div className="baseCarrito">
            <h2>Total:</h2>
            <h2 className="totalCarrito">$0</h2>
            <button className="realizarPedido" onClick={abrirformulario}>Realizar pedido</button>
          </div>
        </div>
        <div className={`formulario${formulario ? " formulario1" : ""}`}>
          <img className="cierreFormulario" onClick={cerrarformulario} src={cierre} />
          <h3 className="tituloFormulario">Datos cliente</h3>
          <form className="formulario1" action="https://formsubmit.co/aleknot.696@gmail.com" method="post">
            <label for="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="name" minLength="2" maxLength="15" />
            <label for="apellido">Apellido</label>
            <input id="apellido" name="apellido" type="family-name" minlength="2" maxlength="15" />
            <label for="telefono">Telefono</label>
            <input id="telefono" name="telefono" type="tel" />
            <label for="email">Email</label>
            <input id="email" name="email" min="5" type="email" />
            <label className="labelOculto" for="modelo">Modelo</label>
            <input className="inputModeloOculto" name="modelo" id="modelo" type="text" value="DUSTER" />
            <label className="labelOculto" for="accesorios">Accesorios</label>
            <input className="inputAccesorioOculto" name="accesorios" id="accesorios" type="text" />
            <label className="labelOculto" for="monto">Monto total</label>
            <input className="inputMontoOculto" name="monto" id="monto" type="text" />
            <button id="envioFormu" className="realizarPedido">Enviar</button>
            <input type="hidden" name="_next" value="http://knot696.online/" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
          <div className="mensajeEnvio">
            <img src={check} />
            <h3>Pedido realizado correctamente</h3>
            <h6>En breve nos comunicaremos con usted para finalizar su pedido.</h6>
          </div>
        </div>
      </nav>
      <div className='nav1'>
        <img className='logo' src={logo} />
        <Link to="/">ACCESORIOS COLOCADOS</Link>

        <a onClick={()=>{
          abrirVehiculos();
          cerrarUbicacion();
          cerrarRedes();
          }}>VEHÍCULOS</a>
        <div className={`vehiculos${vehiculos ? " vehiculos1" : ""}`}>
          <Link to="/Alaskan" ><img src={alaskan}/></Link>
          <Link to="/Kangoo"><img src={kangoo}/></Link>
          <Link to="/Duster"><img src={duster}/></Link>
          <Link to="/Oroch"><img src={oroch}/></Link>
          <Link to="/Sandero"><img src={sandero}/></Link>
          <Link to="/Stepway"><img src={stepway}/></Link>
          <Link to="/Logan"><img src={logan}/></Link>
          <img id="cierre" onClick={cerrarVehiculos} src={cierre} />
        </div>
        <a onClick={()=>{
          abrirUbicacion();
          cerrarRedes();
          cerrarVehiculos();
          }}>UBICACION</a>
        <div className={`ubicacion${ubicacion ? " ubicacion1" : ""}`}>
          <iframe className="gmap_canvas" src="https://maps.google.com/maps?q=avenida+juan+omingo+peron+1452%2C+monte+maiz%2C+cordoba%2C+argentina&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          <img id="cierre" onClick={cerrarUbicacion} src={cierre} />
        </div>
        <a onClick={()=>{
          abrirRedes();
          cerrarUbicacion();
          cerrarVehiculos();
          }}>REDES</a>
        <div className={`redes${redes ? " redes1" : ""}`}>
          <a href="https://www.facebook.com/jorgegiorgiaccesorios/" target="_blank"><img src={logoFace} /></a>
          <a href="https://www.instagram.com/jorgegiorgiservicios/" target="_blank"><img src={logoInsta} /></a>
          <a href="https://www.jorgegiorgi.com/" target="_blank"><img src={logoWeb} /></a>
          <img id="cierre" onClick={cerrarRedes} src={cierre} />
        </div>
        <div>
          <img className="botonCarrito" onClick={abrirCarrito} src={botonCarrito} />
        </div>
        <div className={`carrito${carrito ? " carrito1" : ""}`}>
          <h3 className="tituloCarrito">CARRITO</h3>
          <img className="cierreCarrito" onClick={cerrarCarrito} src={cierre} />
          <div className="itemsCarrito"></div>
          <div className="baseCarrito">
            <h2>Total:</h2>
            <h2 className="totalCarrito">$0</h2>
            <button className="realizarPedido" onClick={abrirformulario}>Realizar pedido</button>
          </div>
        </div>
        <div className={`formulario${formulario ? " formulario1" : ""}`}>
          <img className="cierreFormulario" onClick={cerrarformulario} src={cierre} />
          <h3 className="tituloFormulario">Datos cliente</h3>
          <form className="formulario1" action="https://formsubmit.co/aleknot.696@gmail.com" method="post">
            <label for="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="name" minLength="2" maxLength="15" />
            <label for="apellido">Apellido</label>
            <input id="apellido" name="apellido" type="family-name" minlength="2" maxlength="15" />
            <label for="telefono">Telefono</label>
            <input id="telefono" name="telefono" type="tel" />
            <label for="email">Email</label>
            <input id="email" name="email" min="5" type="email" />
            <label className="labelOculto" for="modelo">Modelo</label>
            <input className="inputModeloOculto" name="modelo" id="modelo" type="text" value="DUSTER" />
            <label className="labelOculto" for="accesorios">Accesorios</label>
            <input className="inputAccesorioOculto" name="accesorios" id="accesorios" type="text" />
            <label className="labelOculto" for="monto">Monto total</label>
            <input className="inputMontoOculto" name="monto" id="monto" type="text" />
            <button id="envioFormu" className="realizarPedido">Enviar</button>
            <input type="hidden" name="_next" value="http://knot696.online/" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
          <div className="mensajeEnvio">
            <img src={check} />
            <h3>Pedido realizado correctamente</h3>
            <h6>En breve nos comunicaremos con usted para finalizar su pedido.</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav