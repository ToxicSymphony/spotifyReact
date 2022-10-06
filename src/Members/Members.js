import "./Members.css";
import "animate.css"
import WOW from "wowjs"
import { useEffect } from "react";

export function Members() {

    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    }, [])

  return (
    <>
      <div className="container ">
        <div className="row justify-content-around ">
          <div className="col-12 col-md-4">
            <div className="row my-5 justify-content-center ">
            <div className="col-12 col-md-5 text-end align-self-center border-end  ">
                <h2 className="fs-4 animate__animated animate__backInLeft">Guy-Manuel de Homem-Christo</h2>
              </div>
              <div className="col-12 col-md-7 zoom align-self-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/Guy-ManueldeHomem-ChristoMascarade.jpg?alt=media&token=2b498618-eb0c-4da0-b06e-eecf0bb72ec2"
                  alt=""
                  className="img-fluid w-100 btn  animate__animated animate__backInRight wow"
                  data-bs-toggle="collapse"
                  data-bs-target="#artist1"
                ></img>
              </div>
              <div className="row mt-2">
                <div className="col-12 col-md-2 "></div>
                <div styles="min-height: 120px;">
                  <div className="collapse" id="artist1">
                    <div className="card card-body bg-dark text-warning text-end" styles="width: 300px;">
                      This is some placeholder content for a horizontal
                      collapse. It's hidden by default and shown when triggered.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="row my-5 justify-content-center ">
              <div className="col-12 col-md-7 zoom align-self-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fotosanotojobs.appspot.com/o/ThomasBangalterMascarade.jpg?alt=media&token=4a028813-5f46-4000-ab5d-7d0087a0ee52"
                  alt=""
                  className="img-fluid w-100 h-25 btn animate__animated animate__backInLeft wow"
                  data-bs-toggle="collapse"
                  data-bs-target="#artist2"
                ></img>
              </div>
              <div className="col-12 col-md-4 text-start align-self-center border-start">
                <h2 className="fs-4 animate__animated animate__backInRight wow">Thomas Bangalter</h2>
              </div>
              <div className="row mt-2">
                <div className="col-12 col-md-2"></div>
                <div styles="min-height: 120px;">
                  <div className="collapse" id="artist2">
                    <div className="card card-body bg-dark text-warning" styles="width: 300px;">
                      This is some placeholder content for a horizontal
                      collapse. It's hidden by default and shown when triggered.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
