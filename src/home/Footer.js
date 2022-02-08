import React from 'react'

export default function Footer() {
    return (
        <div>
             <footer id="footer">
        <div className="container-fluid">
          <div className="row">
            <hr />
            <div className="col-md-3">
              <span>Book Trekker <img src="/images/logo3.png" alt="" /></span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 links">
              <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href>Books</a></li>
                <li><a href>About Us</a></li>
                <li><a href>Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div className="col-md-5 follow">
              <h6>Follow us :</h6>
              <i className="fab fa-facebook-square" />
              <i className="fab fa-instagram" />
              <i className="fab fa-twitter" />
              <i className="fab fa-pinterest" />
              <i className="fab fa-youtube" />
            </div>
            <div className="col-md-3 contact">
              <h6>Contact Us: </h6>
              <i className="far fa-envelope" />
              <i className="fas fa-mobile-alt" />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col end">
              <p>Copyright © 2022. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>

        </div>
    )
}
