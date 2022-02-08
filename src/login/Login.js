import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../common/NavBar";

export default function Login() {
let history=useHistory()

  // For handling login
 const handleLogin=(e)=>{
   e.preventDefault()
   console.log("ppp",e.target.email.value);
   axios.post(process.env.REACT_APP_API+"user/login",{
     email:e.target.email.value,
     password:e.target.password.value
   }).then(res=>{
     console.log("mm",res);
     localStorage.setItem('auth',res.data.token)
     history.push("/books/")
   }).catch(err=>{
     console.log(err);
   })
  
 }

  return <>
  <NavBar />
  <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <form id="login" onSubmit={handleLogin}>
              <h4>LOGIN</h4>
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  required
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="btn btn-secondary w-100">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <footer id="footer">
        <hr />
        <div className="col end">
          <p>Copyright © 2022. All rights reserved</p>
        </div>
      </footer>
  </>

}
