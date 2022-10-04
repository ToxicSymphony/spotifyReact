import './Home.css'
import { SubMenu } from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'

export function Home (){
    let descripcionBanda = 'Daft Punk fue un dúo francés de french house formado por los DJs y productores Guy-Manuel de Homem-Christo y Thomas Bangalter.3​4​5​ Daft Punk alcanzó una gran popularidad dentro del house a mediados de los años 90 en Francia y continuó con su éxito en los años posteriores.3​4​6​ El dúo también es acreditado por la producción de canciones que se consideran esenciales en el estilo del french house El acrónimo Daft, presente en su primer DVD, proviene de las iniciales de A Story about Dogs, Androids, Firemen and Tomatoes. Estas palabras reciben significado al dúo musical por su primera canción, «Da Funk» del año 1995 perteneciente al álbum Homework, dónde aparece un perro antropomorfo (Dogs) como protagonista en el vídeo. Luego Androids por la aparición de robots bailando en el vídeo «Around the World» del año 1997 del álbum Homework. Fireman (Bombero en español) que aparecen en el video de Burnin y Tomatoes por el vídeo «Revolution 909».'
    return(
        <>
            <div className="banner">

            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">
                            DaftPunk
                        </h1>
                        <p className='text-center'>
                            {descripcionBanda}
                        </p>

                    </div>

                </div>

            </div>

            <div>
                <SubMenu></SubMenu>
            </div>

            <div>
                <Footer></Footer>
            </div>


        </>
    )
}