import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavCategory() {
  const [category, setcategory] = useState([]);

  useEffect(() => {
    console.log("wwwww");
    axios.get(process.env.REACT_APP_API + "category/list").then((res) => {
      console.log("zzzzzzzz");
      setcategory(res.data.category);
    });
  }, []);

  return (
    <>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div className="container-fluid px-0" style={{ minWidth: "400px" }}>
          <div className="row mx-0">
            {console.log("sss", category)}
            {category.map((cat) => {
              return (
                <div className="col-6 px-0">
                  <li>
                    <Link to={"/books/"+cat._id} className="dropdown-item">
                      {cat.name}
                    </Link>
                  </li>
                </div>
              );
            })}
          </div>
        </div>
      </ul>
    </>
  );
}
