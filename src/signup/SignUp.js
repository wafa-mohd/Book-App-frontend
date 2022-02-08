import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../common/NavBar";

export default function SignUp() {
  let history=useHistory()
const handleSignup=(e)=>{
  e.preventDefault();
  console.log(e.target.fname.value);
  axios.post(process.env.REACT_APP_API + "user/sign-up",{
    firstName:e.target.fname.value,
    lastName:e.target.lname.value,
    email:e.target.email.value,
    password:e.target.password.value
  }).then(res=>{
    console.log(res);
    history.push("/login")
  }).catch(err=>{
    console.log(err);
  })
}
    
  return <>
      <NavBar />
      <div className="container" id="signUp">
        <div className="row">
          <div className="col-5">
            <form onSubmit={handleSignup}>
              <h3>Create Account</h3>
              <div className="form-group py-3">
                <label htmlFor="exampleInputText">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  name="fname"
                  required
                />
              </div>
              <div className="form-group py-3">
                <label htmlFor="exampleInputText ">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputText"
                  aria-describedby="emailHelp"
                  name="lname"
                  required
                />
              </div>
              <div className="form-group py-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  required
                />
                <small id="emailHelp" className="form-text text-muted" />
              </div>
              <div className="form-group py-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password" required
                />
              </div>
              <p>
                By creating an account you agree to our{" "}
                <a href="#" style={{ color: "dodgerblue" }}>
                  Terms &amp; Privacy
                </a>
                .
              </p>
              <button type="submit" className="btn btn-secondary w-100">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <footer id="footer">
        <div className="container-fluid">
          <div className="row">
            <hr />
          </div>
          <div className="row ">
            <div className="col-md-4 links">
              <ul>
                <li>
                  <a href>Home</a>
                </li>
                <li>
                  <a href>Books</a>
                </li>
                <li>
                  <a href>About Us</a>
                </li>
                <li>
                  <a href>Terms &amp; Conditions</a>
                </li>
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
          <div className="col end">
            <p>Copyright © 2022. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
}
