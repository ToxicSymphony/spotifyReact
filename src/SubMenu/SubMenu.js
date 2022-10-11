import WOW from "wowjs"
import { useEffect } from "react";

export function SubMenu(){

    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return(
        <>
            <div className="container my-5">
                <div className="row text-center justify-content-around animate__animated animate__lightSpeedInLeft wow">
                    <div className="col-12 col-md-1 border border-danger p-3 shadow bg-dark text-warning animate__animated animate__rotateIn wow">
                        <i className=" bi bi-disc fs-1 my-2 animate__animated animate__zoomIn wow"></i>
                    </div>
                    <div className="col-12 col-md-1 border border-danger p-3 shadow bg-dark text-warning animate__animated animate__rotateIn wow">
                        <i className=" bi bi-justify-left fs-1 my-2 animate__animated animate__zoomIn wow"></i>
                    </div>
                    <div className="col-12 col-md-1 border border-danger p-3 shadow bg-dark text-warning animate__animated animate__rotateIn wow">
                        <i className=" bi bi-people-fill fs-1 my-2 animate__animated animate__zoomIn wow"></i>
                    </div>
                </div>
            </div>
        </>
    )
}