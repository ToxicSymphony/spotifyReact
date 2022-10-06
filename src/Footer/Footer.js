export function Footer (){
    return(
        <>

            <footer className="container-fluid bg-dark text-warning p-3 mt-5 text-center ">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center text-end me-5 ">
                        <h4>&copy; Brayan Ospina Aprendiz SURA</h4>
                        <h4>Medellin</h4>
                        <h4>2022</h4>

                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-around align-self-center border-start ">
                      
                            
                                <a className="text-decoration-none text-warning" href="">
                                    <i className="bi bi-github fs-2 text-white "></i>
                                    <p className="fs-4">GitHub</p>
                                </a>
                            
                            
                                <a className="text-decoration-none text-warning" href="">
                                    <i className="bi bi-linkedin fs-2  text-white"></i>
                                    <p className="fs-4">LinkedIn</p>
                                </a>
                        
                            
                        
                                <a className="text-decoration-none text-warning" href="">
                                    <i className="bi bi-facebook fs-2  text-white text-decoration-none"></i>
                                    <p className="fs-4">Facebook</p>
                                </a>
                            
                    
                        
                    </div>

                </div>


            </footer>

        </>
    )
}