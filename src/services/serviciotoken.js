export async function servicioTOKEN (){

    const URI = "https://accounts.spotify.com/api/token"

    const CLIENT_ID ="client_id=ab2fa579a0e2410f976e2cf0799a3a1f"
    const CLIENT_SECRET="client_secret=f821e37f871e4764a5e8c7188acedf52"
    const GRANT_TYPE = "grant_type=client_credentials"

    const PETICION = {
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:GRANT_TYPE+"&"+CLIENT_SECRET+"&"+CLIENT_ID
    }

    let respuesta = await fetch(URI,PETICION)
    let datos = await respuesta.json()
    datos=datos.token_type+' '+datos.access_token
    
    return datos

    
}