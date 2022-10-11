export async function servicioSpoty(){
    const URI = "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi/top-tracks?market=US"

    const TOKEN = "Bearer BQAz4L6XN58P6S_WQ8fS4xfRjbceg3_npxKTxlmgOalP0EGfx_P5MmVZyCjf3WM3n57FsnKnlj9OXdTCB4QyCwsZHaggBsN0Qzb0KNs-px6XRn-Ld2DUK0LlupPE6mmM-vhN6q0rsuEUqYfSihP5sIcT8Vtzhs9NbbNnuTgfCzZk5w"

    const PETICION ={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
    
   let respuesta = await fetch(URI,PETICION)
   let datos = await respuesta.json()
   return(
    datos
   )

}