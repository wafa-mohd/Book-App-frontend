import React from "react";
import { useHistory } from "react-router-dom";

export default function BookListItem(props) {

  const history = useHistory()
  const handleBuy = () => {
    let token = localStorage.getItem('auth')
    if (token) {
      history.push("/cart/"+props.details._id)
    }else{
      history.push("/login")
    }
  }

  return (
    <>
      <div className="col-md-4">
        <div className="card mb-2" style={{height: '350px', border: 'none'}}>
          <img
            src={process.env.REACT_APP_IMAGE_PATH +props.details.image }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h6 className="card-title mb-0">{props.details.bookName}</h6>
            <p className="card-text"><small>{props.details.authorName}</small></p>
            <p className="card-text p-0 m-0"><strong>{props.details.amount}</strong></p>
            <a href="#" className="btn btn-primary btn-sm mb-1 " onClick={handleBuy}>
              BUY NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
