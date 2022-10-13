import { Footer } from "../Footer/Footer.js";

export function Musicos() {
  let musicos = [
    {
      nombre: "Guy-Manuel de Homem-Christo",
      rol: " DJ y productor francés",
      url: "https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/daft-Punkconcert1.jpg?alt=media&token=6a485589-d5b5-482c-a225-60b2f1a27e71",
    },

    {
      nombre: "Thomas Bangalter",
      rol: "DJ y productor francés",
      url: "https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/daft-Punkconcert2.jpg?alt=media&token=634f9424-aa7e-4935-b14e-fdc6b790ba4a",
    },
  ];

  let conciertosMemorables = [
    {
      id: 1,
      fecha: "2006",
      pais: "Estados Unidos",
      descripcion:
        "Tenemos que agradecer a este dúo de música electrónica por uno de los sets más inolvidables en la historia de Coachella y el mundo de la música. Como se cuenta la historia, más de 40,000 personas lograron ingresar a la Tienda Sahara con capacidad de 10,000 en aquella edición del 2006 para presenciar a Djsx franceses establecer un nuevo estándar para conciertos en vivo. Ese momento se considera por muchos el inicio del EDM y uno de los momentos más importantes en la historia de la música electrónica. Ellos cambiaron la percepción de lo que es un concierto de electrónica-dance en vivo. Tanto por su espectáculo visual como por su manera de mezclar. Esa noche todo cambió. No por nada este concierto se encuentra en todos los conteos de los mejores conciertos de la historia",
      foto: "https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/coachellavalleydaftpunk.jpg?alt=media&token=294cc7f1-c70a-4048-8759-540049754abf",
    },
    {
      id: 2,
      fecha: "1997",
      pais: "Reino Unido",
      descripcion:
        "En la edición de 1997, mejor conocida como “el año del lodo” gracias a la caída de unas lluvias torrenciales unos días antes, Daft Punk se mega rifó un conciertazo de proporciones épicas. 10 años antes del Alive 2007 los franceses ya tenían en sus manos un set bastante bien armado. Lleno de visuales futuristas y muy, pero muy buena música. La famosa Dance Tent de Glastonbury fue de los primeros escenarios que vieron emerger a los robots.",
      foto: "https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/glastonburydaftpunk.jpg?alt=media&token=ad86ef9b-b240-4475-84fd-e969d3003c60",
    },
    {
      id: 3,
      fecha: " 2001",
      pais: "Reino Unido",
      descripcion:
        "Para este concierto nos quedamos en el Reino Unido pero nos adelantamos toda la gira de Homework de 1997. ¿Se pueden imaginar un concierto de Daft Punk y Gorillaz? Pues aquí sucedió. En un esfuerzo para recaudar fondos para las víctimas de ataques militares en Afganistán, ambas bandas más Massive Attack se juntaron en Londres para dar lo mejor que tenían en ese momento. Este fue un DJ Set, eso lo sabemos, sin embargo se dice que ha sido uno de los conciertos más prendidos de los franceses. Y la verdad es que cómo no va a serlo con las mezclas que hicieron de Basement Jaxx, Cassius y sus grandes clásicos hasta el momento. Encima de todo, sabiendo que por ahí saldrán Damon Albarn y Jamie Hewlett a tocar las mejores rolas de Gorillaz. Todas las ganancias del concierto se fueron a la Cruz Roja y su equivalente musulmán, la Media Luna Roja, para ayudar a aquellos cuyas vidas fueron devastadas por los ataques americanos.",
      foto: "https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/404notfound.png?alt=media&token=ee6df375-b218-48bb-a8ce-35902ca9f10f",
    },
    {
      id: 4,
      fecha: "2006",
      pais: "Francia",
      descripcion:
        "Tocando para 100,000 personas, tan solo unos días después de su show en Coachella, los franceses regresaron a su tierra para presentarle a sus paisanos el proyecto de electrónica francesa más grande de la historia hasta ese momento. Cerrando la noche después de actos como The Strokes (donde conocerían a Julian Casablancas para eventualmente hacer en colaboración “Instant Crush”), Arctic Monkeys, Morrissey y Deftones, Daft Punk dio uno de los mejores conciertos de electrónica que ha visto Francia.",
      foto: "https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/eurokeenesdaftpunk.jpg?alt=media&token=45d68bcb-9646-4152-9d25-2fec7c1cda55",
    },
    {
      id: 5,
      fecha: "2007",
      pais: "Mexico",
      descripcion:
        "Sí, había que ponerlo y aquí está. Vive en nuestros recuerdos y en la cultura de todos los amantes de la música electrónica en México. Hayas estado ahí o no, ese concierto es y permanecerá siendo el epicentro de miles de conversaciones en fiestas y reuniones de los melómanos mexicanos. Si bien Daft Punk dio otros conciertazos como el del Makuhari Messe International Exhibition Hall en Japón, hechos más que nada por el ambiente que le puso el público, los mexicanos somos conocidos mundialmente por echar el mejor desmadre relajo. Somos conocidos como uno de los mejores públicos del mundo, y su presentación del Alive 2007 no fue para nada la excepción. Sus rolas fueron amadas, fueron cantadas y fueron bailadas con euforia en el Palacio de los Deportes. La pirámide que albergó a los robots en su última gira se iluminó abajo del domo para mostrarle a México el nuevo camino que tomaría la música electrónica.",
      foto: "https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/mexicodaftpunk.jpg?alt=media&token=91204f1b-d96a-4164-b26e-fda1899a0c92",
    },
  ];

  //mapeando un arreglo para hacer render

  return (
    <>
      <div className="container-fluid ">
        <div className="row row-cols-1 row-md-4 g-3 justify-content-around my-5  d-flex align-items-center">
          {musicos.map((musico) => {
            return (
              <>
                <div className="col-6 col-md-4 align-self-center">
                  <div className="card shadow bg-dark text-warning border border-warning h-100 text-center">
                    <img
                      src={musico.url}
                      className="img-fluid w-100 h-100"
                      alt="foto"
                    ></img>
                    <h1>{musico.nombre}</h1>
                    <h2>{musico.rol}</h2>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="row ">
          {conciertosMemorables.map((concierto) => {
            return (
              <div className="row row-cols-1 row-md-4 g-3 text-center">
                <div className="card shadow bg-dark text-warning border border-warning h-100 ">
                  <div className="row justify-content-around">
                    <div className="col-3 align-self-center my-3  ">
                      <img
                        src={concierto.foto}
                        className="img-fluid w-100"
                        alt="foto"
                      ></img>
                    </div>
                    <div className="col-3 align-self-center ">
                      <h1>{concierto.pais}</h1>
                      <h2>{concierto.fecha}</h2>
                    </div>
                    <div className="col-3  align-self-center my-5">
                      <p>
                        <a
                          class="btn btn-warning"
                          data-bs-toggle="collapse"
                          href="#collapseExample"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Mas Informacion
                        </a>
                      </p>
                      <div className="collapse" id="collapseExample">
                        <div className="card card-body bg-dark border border-warning">
                          <p>{concierto.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
