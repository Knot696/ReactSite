import { useState } from "react";

function Boton() {

    const [contador, setContador] = useState(0);

    const contar = () => {
        setContador(contador + 1);
    }
    
    return (
        <>
        <button id='botonAgregar' onClick={contar}>Agregar al carrito</button>
        </>
    )
}

export default Boton