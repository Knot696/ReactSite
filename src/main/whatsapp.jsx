import './whatsapp.css'
import logoWhatsapp from '../../public/imagenes/items/logow.png'

function Whatsapp({ imagen, descripcion }) {
    return (
        <div className="mensajew">
            <a className="wap" href="https://api.whatsapp.com/send?phone=+543468437548&text=Hola%2C+quiero+realizar+una+consulta+sobre+un+accesorio%21" target="_blank"><img src={logoWhatsapp}/></a>
            <p className="mensaje">Déjenos su consulta aquí!</p>
        </div>
    )
}

export default Whatsapp