import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SubCategoryList(props) {
  const [subCategory, setsubCategory] = useState([]);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API + "sub-category/list/byId/" + props.categoryId
      )
      .then((res) => {
        console.log("qqq", res);
        setsubCategory(res.data.subcategory);
      });
  }, [props.categoryId]);

  return (
    <>
      <div className="class d-grid col mx-auto" style={{ textAlign: "left" }}>
        {subCategory.map((sub) => {
          return <Link to={`/books/${props.categoryId}/${sub._id}`} className="btn btn-light mb-3">
           {sub.name}
          </Link>;
        })}

        {/* <button type="button" className="btn btn-light mb-3">
          Graphic Novels{" "}
        </button>
        <button type="button" className="btn btn-light mb-3">
          Children's fIction
        </button>
        <button type="button" className="btn btn-light mb-3">
          Crime &amp; Mystery
        </button>
        <button type="button" className="btn btn-light mb-3">
          Horror
        </button>
        <button type="button" className="btn btn-light mb-3">
          Fantasy &amp; Science Fiction
        </button>
        <button type="button" className="btn btn-light mb-3">
          Romance
        </button>
        <button type="button" className="btn btn-light mb-3">
          Historical Fiction
        </button>
        <button type="button" className="btn btn-light mb-3">
          Literature
        </button> */}
      </div>
    </>
  );
}
