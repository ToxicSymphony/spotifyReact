import './History.css'
import { Carrusel } from '../Carrusel/Carrusel.js'
import { Members } from '../Members/Members.js'
import { Footer } from '../Footer/Footer.js'

export function History(){
    return(
        <>

            <Carrusel></Carrusel> 
            <div className='container my-5'>
                
                        <Members></Members>

            </div>

            <div>
                <Footer></Footer>
            </div>
        </>
    )
}