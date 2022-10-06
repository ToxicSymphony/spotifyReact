import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand  text-warning fw-bold" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active  text-warning" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-warning" to="/history">
                  History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-warning" to="/members">
                  Members
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-warning" to="/albums">
                  Albums
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
