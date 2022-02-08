import react from "react"
import { Link } from "react-router-dom"
import NavCategory from "../common/NavCategory"

export default function ShowCase() {
    return <header id="showcase">
    <video autoPlay muted loop id="myVideo">
      <source src="/videos/New video.mp4" type="video/mp4" />
    </video>
    <div className="content">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Book Trekker<img src="/images/logo3.png" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Books
                  </a>
                  <NavCategory />
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">About Us </a>
                </li>
                <li className="nav-item">
                <Link to="/cart" className="nav-link active">Cart<i className="fas fa-shopping-cart"></i>{" "}</Link>
              </li>
              <li className="nav-item">
                <div className="btn-group">
                  <Link to="/login" className="btn btn-light active">Login</Link>
                  <Link to="/signup" className="btn btn-light">Sign-up</Link>
                </div>
              </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row title">
          <div className="col-md-8">
            <h1>THE GIFT OF IMAGINATION</h1>
            <p>Share your favourite stories with loved ones.</p>
            <button type="button" className="btn btn-dark">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  </header>
}