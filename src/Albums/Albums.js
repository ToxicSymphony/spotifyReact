import { servicioSpoty } from "../services/serviciospoty"
import { useState } from "react"

export function Albums (){

    const [canciones,setCanciones] = useState(null)

    servicioSpoty()
    .then(function(respuesta){
        console.log(respuesta)
        setCanciones(respuesta.tackas)
        console.log(canciones)

    })

    
    return (
        <>
            <p>loviu beibi</p>
        </>
    )
}