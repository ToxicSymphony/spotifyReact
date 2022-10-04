export function Carrusel(){
    return(
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/daftpunkwhite.jpg?alt=media&token=80247fcc-25d8-41c0-8499-7012de06c918" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/daftpunkaround.jpg?alt=media&token=a9585d55-d93c-499b-9162-9cb5227083af" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/daftpunkgetlucky.jpg?alt=media&token=69ffc513-9b72-40d4-826e-77fd5da674dd" className="d-block w-100 h-100" height="400" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}