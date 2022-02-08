import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../common/NavBar";

export default function Cart() {
  let { id } = useParams();
  let token = localStorage.getItem("auth");
  const [book, setbook] = useState({});
  const [showOrderForm, setshowOrderForm] = useState(false);
  const [quantity, setquantity] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API + "book/byId/" + id).then((res) => {
      setbook(res.data.book);
    });
  }, []);

  const handleOrder = () => {
    setshowOrderForm(true);
  };

  const handleOrderPlace = (e) => {
    e.preventDefault();
    console.log(e.target.fname.value);
    console.log(e.target.lname.value);
    axios
      .post(
        process.env.REACT_APP_API + "order/place",
        {
          name: e.target.fname.value + " " + e.target.lname.value,
          mobileNumber: e.target.number.value,
          email: e.target.email.value,
          deliveryAddress:
            e.target.address.value +
            ", " +
            e.target.city.value +
            ", " +
            e.target.state.value,
          bookId: id,
          quantity,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log("order placed", res);
        setShowSuccessMessage(true)
      })
      .catch((err) => {});
  };

  return (
    <>
      <NavBar />
      <div id="cart">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="cart">
                <h4>My Cart</h4>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        style={{ width: "100px", margin: "20px 0px 0px 20px" }}
                        src={process.env.REACT_APP_IMAGE_PATH + book?.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <h5 style={{ fontSize: "17px" }}>{book?.bookName}</h5>
                        <p className="card-text">{book?.authorName}</p>
                        <p>{book?.publisher}</p>
                        <b>₹ {book?.amount}</b>
                        <div className=" d-flex">
                          <button
                            className="btn btn-secondary"
                            onClick={() => setquantity(quantity - 1)}
                            disabled={quantity === 1}
                          >
                            -
                          </button>
                          {/* <input
                            className="form-control mx-1"
                            style={{ maxWidth: "40px" }}
                            type="number"
                          /> */}
                          <p style={{ margin: "10px" }}>{quantity}</p>
                          <button
                            className="btn btn-secondary"
                            onClick={() => setquantity(quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showOrderForm ? (
              <div className="col-md-5 user" style={{ marginTop: "40px" }}>
                <div className="row">
                  
                    <form onSubmit={handleOrderPlace}>
                      <div className="row mb-3">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            aria-label="First name"
                            name="fname"
                            required
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            aria-label="Last name"
                            name="lname"
                            required
                          />
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Mobile Number"
                            name="number"
                            required
                          />
                        </div>
                        <div className="col">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 my-2">
                        <label htmlFor="inputAddress" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder="1234 Main St"
                          name="address"
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6 my-2">
                          <label htmlFor="inputCity" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                            name="city"
                            required
                          />
                        </div>
                        <div className="col-md-4 my-2">
                          <label htmlFor="inputState" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputState"
                            name="state"
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div
                          className="col-md-11 my-4 mx-3"
                          style={{ background: "white", textAlign: "center" }}
                        >
                          <span>Total Amount</span>
                          <h5>
                            <b>₹ {book?.amount * quantity}</b>
                          </h5>
                        </div>
                        {showSuccessMessage && (
                          <div className="container">
                            <div
                              className="alert alert-success d-flex align-items-center"
                              role="alert"
                            >
                              <svg
                                className="bi flex-shrink-0 me-2"
                                width={24}
                                height={24}
                                role="img"
                                aria-label="Success:"
                              >
                                <use xlinkHref="#check-circle-fill" />
                              </svg>
                              <div>Your Order Placed Successfully!</div>
                            </div>
                          </div>
                        )}
                        
                        <div
                          className="col-md-12 my-4"
                          style={{ textAlign: "center" }}
                        >
                          <button
                            type="submit"
                            style={{ padding: "8px 132px" }}
                            className="btn btn-secondary"
                          >
                            Submit
                          </button>
                        </div>
                        
                      </div>
                    </form>
                </div>
              </div>
            ) : (
              <div className="col-md-4">
                <div className="card price">
                  <h6>PRICE DETAILS</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <strong>Price (1 item)</strong>
                            </td>
                            <td>₹ {book?.amount * quantity}</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Discount</strong>
                            </td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Delivery Charges</strong>
                            </td>
                            <td>FREE</td>
                          </tr>
                          <tr>
                            <td>
                              <h5>Total Amount</h5>
                            </td>
                            <td>
                              <h5>₹ {book?.amount * quantity}</h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary mx-4 mb-2"
                    onClick={handleOrder}
                  >
                    {" "}
                    Place Order
                  </button>
                </div>
              </div>
            )}

            {/*  */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr style={{ opacity: "10%" }} />
      <footer id="footer">
        <div className="container-fluid">
          <div className="row" style={{ margin: "40px 0px" }}>
            <div className="col-md-4 links">
              <ul>
                <li>
                  <a href style={{ fontSize: "14px" }}>
                    Policies : Returns Policy | Terms of use | Security{" "}
                  </a>
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
  );
}
