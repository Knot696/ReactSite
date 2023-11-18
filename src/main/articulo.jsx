import './articulo.css'

function Articulo({imagen, descripcion}) {
    return (
        <div className='article'>
            <img src={imagen} />
            <h3 className='descripcion'>{descripcion}</h3>
        </div>
    )
}

export default Articulo