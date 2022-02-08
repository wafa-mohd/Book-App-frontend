import React from 'react';
import { Link } from 'react-router-dom';
import NavCategory from './NavCategory';

export default function NavBar() {
  return <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Book Trekker<img src="./assets/image/logo3.png" style={{color:"transparent"}} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link  to="/" className="nav-link active" >Home</Link>
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
                  <Link to="/signup" className="btn btn-light"  style={{background: '#9e9b9b'}}>Sign-up</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </>
}
