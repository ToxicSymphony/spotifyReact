import { servicioSpoty } from "../services/serviciospoty";
import { useState, useEffect } from "react";

export function Albums() {
  const [canciones, setCanciones] = useState(null);

  const [carga, setCarga] = useState(true); //carga de datos

  useEffect(function () {
    servicioSpoty().then(function (respuesta) {
      console.log(respuesta);
      setCanciones(respuesta.tracks);
      setCarga(false)
    });
    console.log(canciones);
  }, []);

  if (carga==true) {

    return(
        <>
            <h1>Estoy cargando</h1>
        </>
    )
    
  }else{

    return (
        <>
    <div className="container">
        <div className="row ">
          {canciones.map((cancion) => {
            return (
              <div className="row row-cols-1 row-md-4 g-3 text-center">
                <div className="card shadow bg-dark text-warning border border-warning h-100 ">
                  <div className="row justify-content-around">
                    <div className="col-3 align-self-center my-3  ">
                      <img
                        src={cancion.album.images[1].url}
                        className="img-fluid w-100"
                        alt="foto"
                      ></img>
                    </div>
                    <div className="col-3 align-self-center ">
                      <h1>{cancion.name}</h1>
                      <h2>{cancion.popularity}</h2>
                    </div>
                    <div className="col-3  align-self-center my-5">
                      <audio src={cancion.preview_url} controls="controls"></audio>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </>
      );

  }

  
}
