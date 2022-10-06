import './History.css'
import { Carrusel } from '../Carrusel/Carrusel'
import { Members } from '../Members/Members'
import { Footer } from '../Footer/Footer'

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